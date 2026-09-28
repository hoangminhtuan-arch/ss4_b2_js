const basePriceSizeS = 35000;
const extraPriceSizeM = 6000;
const extraPriceSizeL = 10000;
const toppingPrice = 8000;

const orderSizes = "MLXSM";
const toppingCount = 2;
const isGoldMember = true;

let totalDrinkAmount = 0;

for (let orderIndex = 0; orderIndex < orderSizes.length; orderIndex++) {
  const currentDrinkSize = orderSizes[orderIndex];

  // Khắc phục: Dùng continue để bỏ qua ly hủy ('X') mà không làm đứt chuỗi lặp
  if (currentDrinkSize === "X") {
    continue;
  }

  // Cấu trúc if-else if sạch sẽ dễ đọc (Clean Code) thay vì viết cùng 1 dòng
  if (currentDrinkSize === "S") {
    totalDrinkAmount += basePriceSizeS;
  } else if (currentDrinkSize === "M") {
    totalDrinkAmount += (basePriceSizeS + extraPriceSizeM);
  } else if (currentDrinkSize === "L") {
    totalDrinkAmount += (basePriceSizeS + extraPriceSizeL);
  }
}

let finalBillAmount = (totalDrinkAmount + toppingCount * toppingPrice) * (isGoldMember ? 0.9 : 1.0);
console.log("Tổng tiền hóa đơn:", finalBillAmount, "VNĐ");

/*
BẢNG ĐỐI SOÁT KẾT QUẢ TEST CASES
| TC | Dữ liệu đầu vào ("MLXSM", top=2, Gold=true) | Kết quả sai (Lỗi Break) | Kết quả đúng (Continue) |
|----|---------------------------------------------|-------------------------|-------------------------|
| 1  | "MLXSM" (M, L, X, S, M)                     | 91800 VNĐ               | 160200 VNĐ              |
| 2  | "XSM" (top=0, Gold=false)                   | 0 VNĐ                   | 76000 VNĐ               |
*/
