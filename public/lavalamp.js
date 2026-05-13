var gpu = new GPU();



// Call with         render(stop, 0,0,now,Date.now());
var renderlavalamp = gpu.createKernel(function(pi,px,py,ps) {
    
    var centerx= -800;
    var centery= -800;
    var x = this.thread.x + centerx;
    var y = this.thread.y + centery;
    var s = ps;
    var myx = (sin(sqrt(x*x + y*y)/100+s/1000));
    var myy = (cos(sqrt(x*x + y*y)/100+s/1000));
    
    s  = ps /240;
    x+= 600;
    y+= 600;
    myx *= (sin(sqrt(x*x + y*y)/100+s/1000));
    myy *= (cos(sqrt(x*x + y*y)/100+s/1000));
    if (x% 20 == 0) {myx = 1.0 }
    if (y% 20 == 0) {myy = 1.0 }
    this.color(myx*(sin(x/20+s)+cos(s))+myy*(sin(s)+cos(s)),
               .5*myy*(sin(s)+cos(s))+myx*(sin(s)+cos(s)),
               myx*sin(s)+myy*cos(s));
    
}).dimensions([300, 300]).graphical(true).loopMaxIterations(20000).mode('gpu');



$('document').ready ( function () {
    var start = Date.now();
    var stop = 0;
    var times = [];
    function frame() {
        now = Date.now() - start;
        times.push(now);
        fps = window.document.getElementById('fpsll');
        fps.textContent = Math.floor(1000/(now - times[times.length-2]));
        
        iters = window.document.getElementById('nll');
        iters.textContent = stop;
        renderlavalamp(stop, 0,0,now,Date.now());

        var canvas = renderlavalamp.getCanvas();

        document.getElementById('mycanvaslavalamp').appendChild(canvas);
        if (stop++ < 20000) {  //0000) {
            window.requestAnimationFrame(frame);
        }
    }
    window.requestAnimationFrame(frame);
    
});
