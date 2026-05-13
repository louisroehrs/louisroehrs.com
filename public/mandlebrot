var gpu = new GPU();


var rendermandlebrot = gpu.createKernel(function(i,x,y,s) {
    var j =0;
    var zr = 0.0;
    var zi = 0.0;
    var maxiter = i;
    var zr2 = 0.0;
    var zi2 = 0.0;
    var newzr = 0.0;
    var myx = ((this.thread.x +x) / s);
    var myy = ((this.thread.y  +y) / s);
    for (var i = 0; i < maxiter; i++) {
        if (( zr2 + zi2) < 4) {
            //3+5i  sqared = 9 -25 + 15i
            newzr = zr2 - zi2 + myx;
            zi =  2 * zr * zi + myy ;
            zr = newzr;
            zr2 = zr * zr;
            zi2 = zi * zi;
            j++;
        } 
    }
    if (j > maxiter-3) 
    {
        this.color(0,0,0,0);
    } else {
        this.color((j%256)/256,(j%64)/64,(j%16)/16,0);
    }
}).dimensions([300, 300]).graphical(true).loopMaxIterations(20000).mode('gpu');


$('document').ready ( function () {
    var start = Date.now();
    var stop = 0;
    var times = [];
    function frame() {
        now = Date.now() - start;
        times.push(now);
        fps = window.document.getElementById('fpsm');
        fps.textContent = Math.floor(1000/(now - times[times.length-2]));
        
        iters = window.document.getElementById('nm');
        iters.textContent = stop;
        rendermandlebrot(stop, 4100+810*15+stop*15, -1000-800*5-stop*7, 14000+800*40+stop*40);

        var canvas = rendermandlebrot.getCanvas();

        document.getElementById('mycanvas').appendChild(canvas);
        if (stop++ < 6000) {  //0000) {
            window.requestAnimationFrame(frame);
        }
    }
    window.requestAnimationFrame(frame);
    
});
