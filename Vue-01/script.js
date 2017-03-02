function Observer(data) {
    this.data = data;
    this.walk(data);
}

Observer.prototype.walk = function(obj) {
    var that = this;
    for (var key in obj) {
        var val = obj[key];
        if(obj.hasOwnProperty(key)) {
            defProperty(key, val, that.data);
            if(typeof val == "object") {
                new Observer(val);
            }
        }
        
    }
}

function defProperty(key, val, _this) {
    Object.defineProperty(_this, key, {
        set: function(newValue) {
            console.log("你设置了", key, "，新的值为", newValue);
            val = newValue;
            if(typeof newValue == "object") {
                new Observer(newValue);
            }
        },
        get: function() {
            console.log("你访问了", key);
            return val;
        }
    })
}