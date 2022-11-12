const AC_GAME_OBJECTS = [];

export class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this);
        this.timedelta = 0;
        this.has_called_start = false;

    }

    start() {  // 只执行一次


    }

    update() { // 每一帧执行一次，除了第一帧之外

    }


    on_destroy() { // 删除之前执行

    }

    destroy() {

        this.on_destroy();

        for (let i in AC_GAME_OBJECTS) {
            const obj = AC_GAME_OBJECTS[i];
            if (obj === this) {
                AC_GAME_OBJECTS.splice(i);
                break;
            }
        }
    }

}


let last_timestamp; // 上一次执行的时刻
const step = timestamp => {
    for (let obj of AC_GAME_OBJECTS) {
        if (!obj.has_called_start) { // 判断是否执行过start函数
            obj.has_called_start = true;
            obj.start();
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(step)
}


// 一般浏览器默认每秒钟默认刷新60次
// requestAnimationFrame传入一个函数step，这个函数会在下一次浏览器渲染之前执行一遍
requestAnimationFrame(step)