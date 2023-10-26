import { Method } from "axios";

/**
 * 配置thunk
 * 如果不传url默认为 /api/setting/settings_by_main_type_sub_type
 */

export interface AsyncThunkValueObject {
  method: Method;
  url: string;
}

export type AsyncThunkValue = AsyncThunkValueObject | Method;

/**
 * 默认url为 ''
 * 如果不使用默认url则需要传对象，否则传请求方式即可
 *
 * 需要将thunk名手动添加到 AsyncThunkMap 中，方便代码提示
 */

// 其他
const other: Record<string, AsyncThunkValue> = {
  getCoin: {
    method: "get",
    url: "/api/others/wallet/config"
  },
  getWallet: {
    method: "get",
    url: "/api/others/wallet/manualLog"
  },
  batchByUsername: {
    method: "post",
    url: "/api/others/wallet/batchByUsername"
  },
  postWallet: {
    method: "post",
    url: "/api/others/wallet/handle"
  }
};

const asyncThunkMap: Record<string, AsyncThunkValue> = {
  login: {
    method: "post",
    url: "/api/login"
  },
  ...other
};

export type AsyncThunkMap =
  | "login"

export default asyncThunkMap;
