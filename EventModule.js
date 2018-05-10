/****************************************************************************************************************/
/* 跨浏览器的事件对象，兼容IE浏览器，调用时创建EventModule实例 */
/* 如果使用事件对象，handler的事件参数 = 实例.getEvent(event);*/
/* 如果使用事件目标，var target = 实例.getTarget(event);*/
/* 如果取消事件默认行为，先获取事件对象：handler的事件参数 = 实例.getEvent(event); 再使用：实例.preventDefault(event)*/
/* 如果阻止事件流，先获取事件对象：handler的事件参数 = 实例.getEvent(event); 再使用：实例.stopPropagation(event)*/
/****************************************************************************************************************/

function EventModule() {}

EventModule.prototype = {
    constructor : EventModule, 
    
    addHandler: function(ele, type, handler){
        if (ele.addEventListener) {
            ele.addEventListener(type, handler, false);
        } else if (ele.attachEvent) {
            ele.attachEvent("on"+type, handler);
        } else {
            ele["on"+type] = handler;
        }
    },

    getEvent: function(event){
        return event ? event : window.event;
    },

    getTarget: function(event){
        return event.target || event.srcElement;
    },

    preventDefault: function(event){
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    removeHandler: function(ele, type, handler){
        if (ele.removeEventListener) {
            ele.removeEventListener(type, handler, false);
        } else if (ele.detachEvent) {
            ele.detachEvent("on"+type, handler);
        } else {
            ele["on"+type] = null;
        }
    },

    stopPropagation: function(event){
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
}