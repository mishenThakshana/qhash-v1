export const QHashMix = (len = 0) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  if (len === 0) {
    console.error("QHashMix requires a number as argument");
  } else {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < len; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result);
  }
};

export const QHashInteger = () => {
  const res = Date.now() + Math.floor(Math.random());
  console.log(res.toString().length);
};
