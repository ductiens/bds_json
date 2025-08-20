// const fs = require("fs");
// const path = require("path");
import path from "path";
import fs from "fs"
import { fileURLToPath } from "url";
import {
  giao_dich_ty_le_hap_thu,
  can_ho_so_cap_hn_hcm,
  pv_do_thi_hn,
  dat_nen,
  su_an_cap_phep,
  vay_no_tai_chinh,
  bien_dong_ton_kho,
  tpdn,
  co_phieu_tin_dung,
  dan_so,
  giai_ngan,
  can_ho_mo_ban,
  so_du_an_so_can,
  tien_su_dung_dat,
  lai_suat_huy_dong_cho_vay,
  gia_tang_dan_so,
  kqkd_kdh,
  mat_bang_ln_thuan_kdh,
  doanh_thu_chuyen_nhuong_kdh,
  du_an_foresta_kdh,
  the_solina,
  kqkd_nlg,
  kqkd_chuyen_nhuong,
  doanh_thu_chuyen_nhuong_nlg,
  doanh_so_chuyen_nhuong_nlg,
  izumi_city_and_paragon,
  kqkd_pdr,
  doanh_thu_chuyen_nhuong_dat_pdr,
  no_vay_tai_chinh_pdr,
  bac_ha_thanh,
  du_phong_pdr,
  kqkd_hdg,
  doanh_thu_phat_dien_hdg,
  hado_charm_villas,
  san_luowng_phat_dien_hdg,
  kqkd_dpg,
  doanh_thu_xay_lap_dpg,
  casamia_balanca,
  thuy_dien_dpg,
  kqkd_xay_lap_dpg,
  mat_bang_lnst_dpg,
  kqkd_hdc,
  chuyen_nhuong_bds_hdc,
  gia_ban_bac_vung_tau,
  the_light_city,
  phuoc_thang,
  kqkd_agg,
  cp_ban_hang_va_loi_nhuan_co_dong,
  the_gio,
  chuyen_nhuong_bds_agg,
  gia_dat_tay_nam_hcm,
} from "../bieudo/index.js";

// Tạo thư mục public nếu chưa có
// const publicDir = path.join(__dirname, "../public");
// if (!fs.existsSync(publicDir)) {
//   fs.mkdirSync(publicDir, { recursive: true });
// }

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Tạo thư mục public nếu chưa có
// Giờ đây, __dirname đã được định nghĩa và dòng này sẽ chạy đúng
const publicDir = path.join(__dirname, "../public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Tạo nhiều file JSON
const jsonFiles = {
  "users.json": [
    { id: 1, name: "Nguyen Van A", email: "a@example.com" },
    { id: 2, name: "Tran Thi B", email: "b@example.com" },
  ],
  "giao_dich_ty_le_hap_thu.json": giao_dich_ty_le_hap_thu,
  "can_ho_so_cap_hn_hcm.json": can_ho_so_cap_hn_hcm,
  "pv_do_thi_hn.json": pv_do_thi_hn,
  "dat_nen.json": dat_nen,
  "su_an_cap_phep.json": su_an_cap_phep,
  "vay_no_tai_chinh.json": vay_no_tai_chinh,
  "bien_dong_ton_kho.json": bien_dong_ton_kho,
  "tpdn.json": tpdn,
  "co_phieu_tin_dung.json": co_phieu_tin_dung,
  "dan_so.json": dan_so,
  "giai_ngan.json": giai_ngan,
  "can_ho_mo_ban.json": can_ho_mo_ban,
  "so_du_an_so_can.json": so_du_an_so_can,
  "tien_su_dung_dat.json": tien_su_dung_dat,
  "lai_suat_huy_dong_cho_vay.json": lai_suat_huy_dong_cho_vay,
  "gia_tang_dan_so.json": gia_tang_dan_so,
  "kqkd_kdh.json": kqkd_kdh,
  "mat_bang_ln_thuan_kdh.json": mat_bang_ln_thuan_kdh,
  "doanh_thu_chuyen_nhuong_kdh.json": doanh_thu_chuyen_nhuong_kdh,
  "du_an_foresta_kdh.json": du_an_foresta_kdh,
  "the_solina.json": the_solina,
  "kqkd_nlg.json": kqkd_nlg,
  "kqkd_chuyen_nhuong.json": kqkd_chuyen_nhuong,
  "doanh_thu_chuyen_nhuong_nlg.json": doanh_thu_chuyen_nhuong_nlg,
  "doanh_so_chuyen_nhuong_nlg.json": doanh_so_chuyen_nhuong_nlg,
  "izumi_city_and_paragon.json": izumi_city_and_paragon,
  "kqkd_pdr.json": kqkd_pdr,
  "doanh_thu_chuyen_nhuong_dat_pdr.json": doanh_thu_chuyen_nhuong_dat_pdr,
  "no_vay_tai_chinh_pdr.json": no_vay_tai_chinh_pdr,
  "bac_ha_thanh.json": bac_ha_thanh,
  "du_phong_pdr.json": du_phong_pdr,
  "kqkd_hdg.json": kqkd_hdg,
  "doanh_thu_phat_dien_hdg.json": doanh_thu_phat_dien_hdg,
  "hado_charm_villas.json": hado_charm_villas,
  "san_luowng_phat_dien_hdg.json": san_luowng_phat_dien_hdg,
  "kqkd_dpg.json": kqkd_dpg,
  "doanh_thu_xay_lap_dpg.json": doanh_thu_xay_lap_dpg,
  "casamia_balanca.json": casamia_balanca,
  "thuy_dien_dpg.json": thuy_dien_dpg,
  "kqkd_xay_lap_dpg.json": kqkd_xay_lap_dpg,
  "mat_bang_lnst_dpg.json": mat_bang_lnst_dpg,
  "kqkd_hdc.json": kqkd_hdc,
  "chuyen_nhuong_bds_hdc.json": chuyen_nhuong_bds_hdc,
  "gia_ban_bac_vung_tau.json": gia_ban_bac_vung_tau,
  "the_light_city.json": the_light_city,
  "phuoc_thang.json": phuoc_thang,
  "kqkd_agg.json": kqkd_agg,
  "cp_ban_hang_va_loi_nhuan_co_dong.json": cp_ban_hang_va_loi_nhuan_co_dong,
  "the_gio.json": the_gio,
  "chuyen_nhuong_bds_agg.json": chuyen_nhuong_bds_agg,
  "gia_dat_tay_nam_hcm.json": gia_dat_tay_nam_hcm,
};

// Tạo các file JSON
Object.entries(jsonFiles).forEach(([filename, data]) => {
  const filePath = path.join(publicDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Created: ${filename}`);
});

console.log("All JSON files generated successfully!");
