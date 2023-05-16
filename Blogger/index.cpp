#include <iostream>

using namespace std;

int main()
{
  int choice, run = 1;

  cout << "*-------------------------------*" << endl;
  cout << "*      MOI CHON CONG VIEC       *" << endl;
  cout << "*-------------------------------*" << endl;
  cout << "*1. Bai toan ve tam giac        *" << endl;
  cout << "*2. Bai toan ve hinh chu nhat   *" << endl;
  cout << "*3. Bai toan ve hinh tron       *" << endl;
  cout << "*0. Thoat                       *" << endl;
  cout << "*-------------------------------*" << endl;
  cout << "Chon bai toan: ";
  cin >> choice;

  while (run == 1)
  {
    switch (choice)
    {
    case 1:
    {
      // Nhap a, b, c va kiem tra xem co phai la do dai 3 canh cua tam giac khong
      cout << "Nhap 3 so a, b, c: ";
      int a, b, c, cv = 0;
      cin >> a >> b >> c;

      while (cv == 0)
      {
        if (a + b > c && a + c > b && b + c > a)
        {
          // Neu dung, in ra chu vi cua tam giac
          cv = a + b + c;
          cout << "Chu vi tam giac: " << (cv) << endl;
          choice = -1;
        }
        else
        {
          // Neu sai, nhap lai 3 so a, b, c
          cout << "Khong phai do dai 3 canh cua tam giac." << endl;
          cout << "Vui long nhap lai 3 so a, b, c: ";
          cin >> a >> b >> c;
        }
      }
      break;
    }
    case 2:
    {
      // Nhap a, b va in ra diem tich, chu vi cua hinh chu nhat
      cout << "Nhap 2 so a, b: ";
      int a, b;
      cin >> a >> b;
      cout << "Dien tich hinh chu nhat: " << (a * b) << endl;
      cout << "Chu vi hinh chu nhat: " << ((a + b) * 2) << endl;
      choice = -1;
      break;
    }
    case 3:
    {
      // Nhap r va in ra diem tich, chu vi cua hinh tron
      cout << "Nhap so r: ";
      int r;
      cin >> r;
      cout << "Dien tich hinh tron: " << (3.14 * r * r) << endl;
      cout << "Chu vi hinh tron: " << (2 * 3.14 * r) << endl;
      choice = -1;
      break;
    }
    case 0:
      run = 0;
      cout << "Thoat." << endl;
      break;
    default:
      cout << "Chon bai toan: ";
      cin >> choice;
      break;
    }
  }

  return 0;
}
