import xpRequest from "@/network";

enum DashBoard {
  categoryGoodsCount = "/goods/category/count",
  categoryGoodsSale = "/goods/category/sale",
  categoryGoodsFavor = "/goods/category/favor",
  addressGoodsSale = "/goods/address/sale",
}

export function getCategoryGoodsCount() {
  return xpRequest.get({
    url: DashBoard.categoryGoodsCount,
  });
}

export function getCategoryGoodsSale() {
  return xpRequest.get({
    url: DashBoard.categoryGoodsSale,
  });
}

export function getCategoryGoodsFavor() {
  return xpRequest.get({
    url: DashBoard.categoryGoodsFavor,
  });
}

export function getAddressGoodsSale() {
  return xpRequest.get({
    url: DashBoard.addressGoodsSale,
  });
}
