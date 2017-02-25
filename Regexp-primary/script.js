(function () {
    var reg_phone = /^1(3[0-9]|4[579]|5[0-35-9]|7[0135-8]|8[0-9])\d{8}$/g,   //通用手机号校验
        reg_CMCC = /^1(3[4-9]|47|5[012789]|78|8[23478])\d{8}$/g, //中国移动
        reg_CUCC = /^1(3[012]|45|5[56]|7[156]|8[56])\d{8}$/g, //中国联通
        reg_CTCC = /^1(33|49|53|7[37]|8[019])\d{8}$/g, //中国电信
        reg_Vir = /^170\d{8}$/g; //虚拟代理运营商
    new Vue({
        el: "#container",
        data: {
            regStr: "",
            testStr: "",
            regStatus: 0,   //0:初始化 1:匹配成功 2:匹配失败
            regResult: []
        },
        methods: {
            findMatch: function () {
                var reg = eval(this.regStr);
                this.regResult = this.testStr.match(reg);
                if(!this.regResult) {
                    this.regStatus = 2;
                } else {
                    this.regStatus = 1;
                }
            },
            showTask1: function () {
                this.regStr = reg_phone.toString();
                this.testStr = "18812011232";
            },
            showTask2: function () {
                this.regStr = "";
                this.testStr = "foo foo bar";
            }
        },
        filters: {

        },
        computed: {
            regShow: function () {
                if (this.regStatus == 0) {
                    return ""
                } else if (this.regStatus == 1) {
                    return "成功匹配到" + this.regResult
                } else {
                    return "匹配失败！"
                }
            }
        }
    })

    function regPhoneNumber(phone) {
        // body...
    }
})();