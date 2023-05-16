const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

function refreshUpdate(listFunction) {
  listFunction.forEach((funcName) => {
    let curFunc = `=${funcName}`;
    let temp = `=sample_${funcName}`;
    sheet
      .createTextFinder(`^\\${curFunc}`)
      .matchFormulaText(true)
      .useRegularExpression(true)
      .replaceAllWith(temp);
    sheet
      .createTextFinder(`^\\${temp}`)
      .matchFormulaText(true)
      .useRegularExpression(true)
      .replaceAllWith(curFunc);
  });
}

function onEdit(e) {
  switch (e.range.getA1Notation()) {
    case "E2":
      refreshUpdate(["getStatus"]);
      break;
    case "E1":
    case "E6":
    case "C10:C":
      refreshUpdate(["calculateExpectedAmount"]);
      break;
    default:
      break;
  }
}

function refreshAllUpdate() {
  const listFunction = ["getStatus", "cusDivide", "calculateExpectedAmount"];
  refreshUpdate(listFunction);
}

function onOpen() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const entries = [
    {
      name: "Tính toán lại",
      functionName: "refreshAllUpdate",
    },
  ];
  sheet.addMenu("Custom Menu", entries);
}

/**
 * Tính số tiền kỳ vọng
 * @param {money} Khoản đầu tư
 * @param {index} Tháng thứ
 * @return số tiền kỳ vọng
 * @calculateExpectedAmount
 */
function calculateExpectedAmount(money, index) {
  const expectedRate = sheet.getRange("E1").getValue();
  const totalMonth = sheet.getRange("E6").getValue();
  const waitMonthRate = Math.round((totalMonth - index) / 12);
  return money + expectedRate * money + expectedRate * money * waitMonthRate;
}
var sample_calculateExpectedAmount = calculateExpectedAmount;

/**
 * Lấy trạng thái hiện tại của khoản đầu tư
 * @param {dealStatus} Trạng thái chốt deal
 * @param {maxDealPrice} Giá cao nhất có thể chốt deal
 * @return Trạng thái
 * @getStatus
 */
function getStatus(dealStatus, minDealPrice) {
  var curPrice = sheet.getRange("E2").getValue();
  return dealStatus !== "Done"
    ? curPrice >= minDealPrice
      ? "Sell"
      : "Hold"
    : "Done";
}
var sample_getStatus = getStatus;

function cusDivide(a, b, c) {
  return b > 0 ? a / b : c;
}
var sample_cusDivide = cusDivide;
