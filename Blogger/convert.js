const fs = require('fs');

fs.readFile('index.md', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  let result = data;

  for (let i = 0; i < sample.length; i++) {
    const row = sample[i];
    const re = new RegExp(row[0], 'g');
    result = result.replace(re, row[1]);
  }

  fs.writeFile('conver_index.md', result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});

const sample = [
  ['chúng tôi', 'chúng ta'],['Chúng tôi', 'Chúng ta'],
  ['tôi', 'mình'],['Tôi', 'Mình'],
  ['phương pháp', 'hàm'],['Phương pháp', 'Hàm'],
  ['phương thức', 'hàm'],['Phương thức', 'Hàm'],
  ['mã nguồn', 'source code'],['Mã nguồn', 'Source code'],
  ['mã', 'code'],['Mã', 'Code'],
  ['thực hành', 'thực hiện'],['Thực hành', 'Thực hiện'],
  // ['kiểm tra', 'test'],['Kiểm tra', 'Test'],
  ['vượt qua', 'passed'],['Vượt qua', 'Passed'],
  ['mẫu thiết kế', 'Design Patterns'],['Mẫu thiết kế', 'Design Patterns'],
  // 2022/10/06
  ['thể hiện', 'instance'],['Thể hiện', 'Instance'],
  // 2022/10/07
  ['các thành phần', 'các component'],['Các thành phần', 'Các Components'],
  ['thành phần', 'component'],['Thành phần', 'Component'],
  ['trạng thái', 'state'],['Trạng thái', 'State'],
  ['khuôn khổ', 'framework'],['Khuôn khổ', 'Framework'],
  ['điểm cuối', 'endpoint'],['Điểm cuối', 'Endpoint'],
  ['code thông báo', 'token'],['Code thông báo', 'Token'],
  ['phần mềm trung gian', 'middleware'],['Phần mềm trung gian', 'Middleware'],
  ['người quan sát', 'observer'],['Người quan sát', 'Observer'],
  ['khóa-giá trị', 'key-value'],['Khóa-giá trị', 'Key-value'],
  ['giá trị', 'value'],['Giá trị', 'Value'],
  ['từ khóa', 'keyword'],['Từ khóa', 'Keyword'],
  ['chuỗi', 'string'],['chuỗi', 'String'],
  ['con số', 'number'],['Con số', 'Number'],
  ['sợi dây', 'string'],['Sợi dây', 'String'],
  ['mảng', 'array'],['Mảng', 'Array'],
  ['sự vật', 'object'],['Sự vật', 'Object'],
  ['vô value', 'null'],['Vô value', 'Null'],
  ['nhận xét', 'comment'],['Nhận xét', 'Comment'],
  ['bình luận', 'comment'],['Bình luận', 'Comment'],
  ['bản ghi', 'record'],['Bản ghi', 'Record'],
  ['các ký tự mẫu', 'template literals'],['Các ký tự mẫu', 'Template literals'],
  // 2022/10/19
  ['chức năng của nhà máy', 'factory functions'],['Chức năng của nhà máy', 'Factory functions'],
  ['các hàm của factory', 'factory functions'],['Các hàm của factory', 'Factory functions'],
  ['hàm của factory', 'factory functions'],['hàm của factory', 'Factory functions'],
  ['chức năng factory', 'factory functions'],['Chức năng factory', 'Factory functions'],
  ['nhà máy', 'factory'],['Nhà máy', 'Factory'],
  ['nguyên mẫu', 'prototype'],['Nguyên mẫu', 'Prototype'],
  ['code JavaScript mạnh mẽ', 'robust JavaScript code'],['Code JavaScript mạnh mẽ', 'Robust JavaScript code'],
  ['method hay nhất', 'best practices'],['Method hay nhất', 'Best practices'],
  ['hàm mũi tên', 'arrow function'],['Hàm mũi tên', 'Arrow function'],
  // 2022/10/22
  ['hàm tạo', 'constructor'],['Hàm tạo', 'Constructor'],
  ['hàm gốc', 'factory function'],['Hàm gốc', 'Factory function'],
  ['method', 'hàm'],['Method', 'Hàm'],
  ['cá thể', 'instance'],['Cá thể', 'Instance'],
  ['code hóa', 'lập trình'],['Code hóa', 'Lập trình'],
  ['viết code', 'lập trình'],['Viết code', 'Lập trình'],
  ['key học', 'khóa học'],['Key học', 'Khóa học'],
  ['key học', 'khóa học'],['Key học', 'Khóa học'],
  ['bao đóng', 'closures'],['Bao đóng', 'Closures'],
  // 2022/
  ['ngữ cảnh thực thi cục bộ', 'local execution contexts'],['Ngữ cảnh thực thi cục bộ', 'Local execution contexts'],
  ['bối cảnh thực thi cục bộ', 'local execution contexts'],['Bối cảnh thực thi cục bộ', 'Local execution contexts'],
  ['ngữ cảnh thực thi toàn cục', 'global execution contexts'],['Ngữ cảnh thực thi toàn cục', 'Global execution contexts'],
  ['bối cảnh thực thi toàn cục', 'global execution contexts'],['Bối cảnh thực thi toàn cục', 'Global execution contexts'],
  ['bối cảnh thực thi toàn cục', 'global execution contexts'],['Bối cảnh thực thi toàn cục', 'Global execution contexts'],
  ['ngữ cảnh thực thi', 'execution contexts'],['Ngữ cảnh thực thi', 'Execution contexts'],
  ['bối cảnh thực thi', 'execution contexts'],['Bối cảnh thực thi', 'Execution contexts'],
  ['ngữ cảnh', 'contexts'],['Ngữ cảnh', 'Contexts'],
  ['bối cảnh', 'contexts'],['Bối cảnh', 'Contexts'],
  ['execution contexts cục bộ', 'local execution contexts'],['Execution contexts cục bộ', 'Local execution contexts'],
  ['execution contexts toàn cục', 'global execution contexts'],['Execution contexts toàn cục', 'Global execution contexts'],
  ['đánh giá', 'evaluated'],['Đánh giá', 'Evaluated'],
  ['phạm vi từ vựng', 'lexical scope'],['Phạm vi từ vựng', 'Lexical scope'],
  ['ngăn xếp cuộc gọi', 'call Stack'],['Ngăn xếp cuộc gọi', 'Call Stack'],
  ['chức năng', 'function'],['Chức năng', 'Function'],
  ['hàm mũi tên', 'arrow function'],['Hàm mũi tên', 'Arrow Function'],
  ['gọi lại', 'callback'],['Gọi lại', 'Callback'],
  ['lời hứa', 'promise'],['Lời hứa', 'Promise'],
  //2022/10/26
  ['ghi nhật ký ứng dụng', 'app logging'],['Ghi nhật ký ứng dụng', 'App logging'],
  ['ghi nhật ký', 'logging'],['Ghi nhật ký', 'Logging'],
  ['công việc', 'job'],['Công việc', 'Job'],
  ['triển khai', 'implement'],['Triển khai', 'Implement'],
  ['triển khai giao diện', 'implement interface'],['Triển khai giao diện', 'Implement interface'],
  ['bài test', 'đoạn test'],['Bài test', 'Đoạn test'],
  //2022/10/27
  ['hàm hay nhất', 'best practices'],['Hàm hay nhất', 'Best practices'],
  ['hàm lập trình tốt nhất', 'coding best practices'],['Hàm lập trình tốt nhất', 'Coding best practices'],
  ['gỡ lỗi', 'debug'],['Gỡ lỗi', 'Debug'],
  ['thời hạn', 'deadline'],['Thời hạn', 'Deadline'],
  ['cơ sở code', 'codebase'],['Cơ sở code', 'Codebase'],
  ['thông lệ', 'good practices'],['Thông lệ', 'Good practices'],
  ['thực hiện lập trình tốt', 'good coding practices'],['Thực hiện lập trình tốt', 'Good coding practices'],
  ['duy trì', 'maintenance'],['Duy trì', 'Maintenance'],
  ['bảo trì', 'maintenance'],['Bảo trì', 'Maintenance'],
  ['lập trình tốt', 'good code'],['Lập trình tốt', 'Good code'],
  ['nhà phát truyển', 'dev'],['Nhà phát truyển', 'Dev'],
  ['không đồng bộ', 'asynchronous'],['Không đồng bộ', 'Asynchronous'],
  ['đồng bộ', 'synchronous'],['Đồng bộ', 'Synchronous'],
  ['vòng lặp sự kiện', 'event loop'],['Vòng lặp sự kiện', 'Event loop'],
  ['đầu vào', 'input'],['Đầu vào', 'Input'],
  ['đầu ra', 'output'],['Đầu ra', 'Output'],
  ['không chặn', 'non-blocking'],['Không chặn', 'Non-blocking'],
  ['bảng điều khiển', 'Terminal'],['Bảng điều khiển', 'Terminal'],
  ['địa ngục callback', 'callback hell'],['Địa ngục callback', 'Callback hell'],
  // 2022/10/28
  ['người nghe', 'listeners'],['Người nghe', 'Listeners'],
  ['I / O', 'I/O'],['I / O', 'I/O'],
  ['dự án', 'project'],['Dự án', 'Project'],
  ['phát ra', 'phát sinh'],['Phát ra', 'Phát sinh'],
  ['toàn cầu', 'global'],['Toàn cầu', 'Global'],
  ['yêu cầu', 'request'],['Yêu cầu', 'Request'],
  ['xác thực request', 'request Validation'],['Xác thực request', 'Request Validation'],
  ['xác thực', 'authentication'],['Xác thực', 'Authentication'],
  ['xử lý lỗi', 'error Handling'],['Xử lý lỗi', 'Error Handling'],
  ['xử lý tuyến đường', 'route handlers'],['Xử lý tuyến đường', 'Route handlers'],
  ['tuyến đường', 'route'],['Tuyến đường', 'Route'],
  ['máy chủ', 'server'],['Máy chủ', 'Server'],
  ['máy khách', 'Client'],['Máy khách', 'Client'],
  ['khách hàng', 'Client'],['Khách hàng', 'Client'],
  ['khách', 'Client'],['Khách', 'Client'],
  [' / ', '/'],[' / ', '/'],
  ['thiết bị đầu cuối', 'terminal'],['Thiết bị đầu cuối', 'Terminal'],
  ['đầu cuối', 'terminal'],['Đầu cuối', 'Terminal'],
  ['tiêu đề', 'headers'],['Tiêu đề', 'Headers'],
  ['cấu hình', 'configure'],['Cấu hình', 'Configure'],
  ['chiến lược', 'strategy'],['Chiến lược', 'Strategy'],
  ['địa phương', 'local'],['Địa phương', 'Local'],
  ['cục bộ', 'local'],['Cục bộ', 'Local'],
  ['mật khẩu', 'password'],['Mật khẩu', 'Password'],
  ['người dùng', 'user'],['Người dùng', 'User'],
  ['dữ liệu nhị phân', 'binary data'],['Dữ liệu nhị phân', 'Binary data'],
  // 2022/11/07
  ['định tuyến', 'Router'],['Định tuyến', 'Router'],
  ['phản hồi', 'response'],['Phản hồi', 'Response'],
  ['function middleware', 'hàm middleware'],['Function middleware', 'Hàm middleware'],
  ['cuộc gọi', 'việc gọi'],['Cuộc gọi', 'Việc gọi'],
  ['hàm middleware', 'Middleware function'],['Hàm middleware', 'Middleware function'],
  ['bộ Router', 'Router'],['Bộ Router', 'Router'],
  ['tải xuống', 'Download'],['Tải xuống', 'Download'],
  ['tải', 'load'],['Tải', 'Load'],
  ['thuộc tính', 'Properties'],['Thuộc tính', 'Properties'],
  [' \, ', '\, '],
  ['kiểm thử đơn vị', 'Unit Test'],['Kiểm thử đơn vị', 'Unit Test'],
];