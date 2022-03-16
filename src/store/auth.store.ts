import { reactive } from "vue";

type AuthStatus = {
  symbol: symbol;
  onShow: boolean;
};

//权限状态
export const authStatus: { [status: string]: AuthStatus } = reactive({
  login: { symbol: Symbol("login"), onShow: false },
  regist: { symbol: Symbol("regist"), onShow: true },
});

export const changeAuthComponent = (auth: symbol) => {
  console.log(Object.entries(auth));
  for (const [k, status] of Object.entries(auth)) {
    console.log('cnbb')
    status.onShow = false;
    if (auth === status.symbol) {
      status.onShow = true;
      console.log('cnnn')
    }
  }
  console.log('cnyyy')
};