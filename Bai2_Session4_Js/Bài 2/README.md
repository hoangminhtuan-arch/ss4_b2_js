# Phân tích lỗi - Sử dụng continue trong vòng lặp

## 1. Phân tích lỗi
- **Dòng lệnh lỗi:** `if (currentDrinkSize === "X") { break; }`
- **Nguyên nhân kỹ thuật:** Lệnh `break` sẽ ngắt hoàn toàn và thoát khỏi vòng lặp `for` ngay lập tức. Khi chuỗi đồ uống là `"MLXSM"`, vòng lặp xử lý `'M'` (vị trí 0), `'L'` (vị trí 1), nhưng khi quét đến `'X'` (vị trí 2), lệnh `break` được gọi khiến vòng lặp dừng vĩnh viễn. Hậu quả là hai ly `'S'` và `'M'` ở cuối chuỗi không được xử lý và bị bỏ quên.
- **Cách khắc phục:** Thay lệnh `break` bằng lệnh `continue`. Lệnh `continue` có tác dụng bỏ qua phần còn lại của vòng lặp hiện tại (không cộng tiền ly hủy) và lập tức bước sang vòng lặp tiếp theo để xử lý những ly đồ uống còn lại bình thường.

## 2. Bảng Test Cases

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế (Lỗi break) | Kết quả đúng mong đợi |
| :--- | :--- | :--- | :--- |
| **TC01:** Chuỗi đồ uống có ly bị hủy ở giữa | orderSizes = "MLXSM"<br>toppings: 2, Thẻ: Gold | Tính ly M(41k) + L(45k) = 86k.<br>Cộng Topping 16k = 102k.<br>Giảm 10% = 91800 VNĐ. | Tính đủ M(41) + L(45) + S(35) + M(41) = 162k.<br>Cộng Topping 16k = 178k.<br>Giảm 10% = 160200 VNĐ. |
| **TC02:** Ly bị hủy nằm ngay vị trí đầu tiên | orderSizes = "XSM"<br>toppings: 0, Thẻ: Normal | Vòng lặp dừng ngay lập tức do gặp X đầu tiên.<br>Tổng tiền: 0 VNĐ. | Bỏ qua X, tính tiếp S(35) + M(41) = 76k.<br>Tổng tiền = 76000 VNĐ. |
