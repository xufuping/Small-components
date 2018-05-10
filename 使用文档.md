> 目录
>
> 1.EventModule - 事件兼容对象

---
### 1.EventModule - 事件兼容对象

```
<button id="oncli">点击事件</button>
```

```
<script src="./EventModule.js"></script>
<script>
var button = document.getElementById('oncli');
var EventExample = new EventModule();
EventExample.addHandler(button, 'click', function(event){
    // 获取事件对象
    event = EventExample.getEvent(event);
    // 获取事件目标
    var target = EventExample.getTarget(event);
    // 取消默认事件(确保兼容性，一定要先获取事件对象)
    EventExample.preventDefault(event);
    // 组织事件流(确保兼容性，一定要先获取事件对象)
    EventExample.stopPropagation(event);
});
</script>
```
