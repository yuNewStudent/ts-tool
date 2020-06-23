declare var isEmail: (s: string) => Boolean;
declare var isMobile: (s: Number) => Boolean;
declare var isPhone: (s: Number) => Boolean;
declare var isURL: (s: any) => Boolean;
declare var isString: (o: any) => Boolean;
declare var isNumber: (o: any) => Boolean;
declare var isBoolean: (o: any) => Boolean;
declare var isFunction: (o: any) => Boolean;
declare var isNull: (o: any) => Boolean;
declare var isUndefined: (o: any) => Boolean;
declare var isObj: (o: any) => Boolean;
declare var isArray: (o: any) => Boolean;
declare var isDate: (o: any) => Boolean;
declare var isRegExp: (o: any) => Boolean;
declare var isError: (o: any) => Boolean;
declare var isSymbol: (o: any) => Boolean;
declare var isPromise: (o: any) => Boolean;
declare var isSet: (o: any) => Boolean;
declare var isWeiXin: (ua: any) => Boolean;
declare var isDeviceMobile: (ua: any) => Boolean;
declare var isQQBrowser: (ua: any) => Boolean;
declare var isSpider: (ua: any) => Boolean;
declare var isIos: () => Boolean;
declare var isPC: () => Boolean;
declare var removeHtmltag: (str: any) => any;
declare var getQueryString: (name: any) => string;
declare var injectScript: (src: any) => void;
declare var download: (url: any) => boolean;
declare var hasClass: (el: any, className: any) => Boolean;
declare var addClass: (el: any, className: any) => void;
declare var removeClass: (el: any, className: any) => void;
declare var getScrollPosition: () => {
    x: any;
    y: any;
};
declare var scrollToTop: () => void;
declare var elementIsVisibleInViewport: (el: any) => Boolean;
declare var shuffle: (arr: any) => any[];
declare var copyTextToClipboard: (value: any) => void;
declare var checkStr: (str: any, type: any) => Boolean;
declare var isCardID: (sId: any) => boolean;
declare var random: (min: any, max: any) => number | null;
declare var numberToChinese: (num: number) => string;
declare var changeToChinese: (Num: any) => String;
declare var contains: (arr: any, val: any) => Boolean;
declare var sort: (arr: any) => any;
declare var unique: (arr: any) => any;
declare var union: (a: any, b: any) => any;
declare var intersect: (a: any, b: any) => any;
declare var remove: (arr: any, ele: any) => any;
declare var formArray: (ary: any) => any[];
declare var max: (arr: any) => number;
declare var min: (arr: any) => number;
declare var sum: (arr: any) => any;
declare var average: (arr: any) => number;
declare var trim: (str: any, type: any) => any;
declare var changeCase: (str: any, type: any) => any;
declare var checkPwd: (str: any) => number;
declare var insertStr: (soure: any, index: any, newStr: any) => any;
declare var isObjectEqual: (a: any, b: any) => Boolean;
declare var colorToRGB: (val: any, opa: any) => String;
declare var appendQuery: (url: string, params: object) => String;
