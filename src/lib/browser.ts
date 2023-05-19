type NavigatorType = {
  Actual_Name?: string;
  Actual_Version?: number | string;
} & Navigator;

/**
 * 获取浏览器信息
 * @function getBrowserInfo
 *
 * @returns {Object} { Actual_Name, Actual_Version }
 *
 * @example
 * const result = getBrowserInfo()
 * console.log('浏览器' + navigator.userAgent)
 * console.log('浏览器' + navigator.Actual_Name, '版本号' + navigator.Actual_Version)
 * console.log(result.Actual_Name, result.Actual_Version)
 */
export function getBrowserInfo() {
  const navigator = window.navigator as NavigatorType;
  const Browser_Name = navigator.appName;
  const Browser_Version = parseFloat(navigator.appVersion);
  const Browser_Agent = navigator.userAgent;
  let Actual_Version, Actual_Name;
  // var is_IE = Browser_Name == "Microsoft Internet Explorer";
  // 判读是否为ie浏览器，ie浏览器已废弃，无需兼容
  const is_NN = Browser_Name == "Netscape"; // 判断是否为 netscape 浏览器
  const is_op = Browser_Name == "Opera"; // 判断是否为 Opera 浏览器
  if (is_NN) {
    // appName为'Netscape'的浏览器可能为Chrome、Firefox、Edge等
    // 处理 5.0 及以上版本
    if (Browser_Version >= 5.0) {
      if (Browser_Agent.indexOf("Netscape") != -1) {
        const Split_Sign = Browser_Agent.lastIndexOf("/");
        // const Version = Browser_Agent.lastIndexOf(" ");
        const Bname = Browser_Agent.substring(0, Split_Sign);
        const Split_sign2 = Bname.lastIndexOf(" ");
        Actual_Version = Browser_Agent.substring(Split_Sign + 1, Browser_Agent.length);
        Actual_Name = Bname.substring(Split_sign2 + 1, Bname.length);
      }
      if (Browser_Agent.indexOf("Firefox") != -1) {
        // 火狐浏览器具有 Firefox 唯一标识
        const Split_Sign = Browser_Agent.lastIndexOf("/");
        const Version = Browser_Agent.lastIndexOf(" ");
        Actual_Version = Browser_Agent.substring(Split_Sign + 1, Browser_Agent.length);
        Actual_Name = Browser_Agent.substring(Version + 1, Split_Sign);
      }
      if (Browser_Agent.indexOf("Safari") != -1) {
        // Chrome、Edge 和 Safari 浏览器 appName 都有 Safari 字段
        if (Browser_Agent.indexOf("Chrome") != -1) {
          // Chrome 和 Edge 浏览器 appName 都有 Chrome 字段
          // Chrome 浏览器
          const Split_Sign = Browser_Agent.lastIndexOf(" ");
          const Version = Browser_Agent.substring(0, Split_Sign);
          const Split_Sign2 = Version.lastIndexOf("/");
          const Bname = Version.lastIndexOf(" ");
          Actual_Version = Version.substring(Split_Sign2 + 1, Version.length);
          Actual_Name = Version.substring(Bname + 1, Split_Sign2);
          if (Browser_Agent.indexOf("Edg") != -1) {
            // 为Edge浏览器
            const Split_Sign = Browser_Agent.lastIndexOf("/");
            // const Version = Browser_Agent.substring(0, Split_Sign);
            const Split_Sign2 = Browser_Agent.lastIndexOf("/");
            const Bname = Browser_Agent.lastIndexOf(" ");
            // console.log("Bname:", Bname);
            Actual_Version = Browser_Agent.substring(Split_Sign2 + 1, Browser_Agent.length);
            Actual_Name = Browser_Agent.substring(Bname + 1, Split_Sign);
          }
        } else {
          //Safari浏览器
          const Split_Sign = Browser_Agent.lastIndexOf("/");
          const Version = Browser_Agent.substring(0, Split_Sign);
          const Split_Sign2 = Version.lastIndexOf("/");
          const Bname = Browser_Agent.lastIndexOf(" ");
          Actual_Version = Browser_Agent.substring(Split_Sign2 + 1, Bname);
          Actual_Name = Browser_Agent.substring(Bname + 1, Split_Sign);
        }
      }
    } else {
      Actual_Version = Browser_Version;
      Actual_Name = Browser_Name;
    }
  }
  //  else if (is_IE) {
  //   var Version_Start = Browser_Agent.indexOf("MSIE");
  //   var Version_End = Browser_Agent.indexOf(";", Version_Start);
  //   Actual_Version = Browser_Agent.substring(
  //     Version_Start + 5,
  //     Version_End
  //   );
  //   Actual_Name = Browser_Name;
  //   if (
  //     Browser_Agent.indexOf("Maxthon") != -1 ||
  //     Browser_Agent.indexOf("MAXTHON") != -1
  //   ) {
  //     var mv = Browser_Agent.lastIndexOf(" ");
  //     var mv1 = Browser_Agent.substring(mv, Browser_Agent.length - 1);
  //     mv1 = "遨游版本:" + mv1;
  //     Actual_Name += "(Maxthon)";
  //     Actual_Version += mv1;
  //   }
  // }
  else if (is_op) {
    //Opera浏览器
    Actual_Name = "Opera";
    // const tempstart = Browser_Agent.indexOf("Opera");
    // const tempend = Browser_Agent.length;
    Actual_Version = Browser_Version;
  } else {
    Actual_Name = "Unknown Navigator";
    Actual_Version = "Unknown Version";
  }
  // 将获取的浏览器名称以及版本号存储在 navigator 对象上
  navigator.Actual_Name = Actual_Name;
  navigator.Actual_Version = Actual_Version;

  return {
    Actual_Name,
    Actual_Version,
  };
}
