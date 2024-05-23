function start(){
    application_1_start();
    application_1_use(50);
    application_2_start();
    application_2_a(-2);
    application_2_b(1);
    application_3_start();
    application_3_use(60);
    application_4_start();
    application_4_a(20);
    application_4_b(70);
}

function application_1_start(){
    var app1=document.getElementById("application_1");
    var context=app1.getContext("2d");
    //INITIALIZE
    context.clearRect(0,0,app1.width,app1.height);
    context.fillStyle='black';
    context.strokeStyle='black';
    context.font='15px Arial';
    context.setLineDash([]);
    //PLOT AXES
    context.beginPath();
    context.moveTo(0,250);
    context.lineTo(500,250);
    context.stroke();
    context.moveTo(50,0);
    context.lineTo(50,300);
    context.stroke();
    context.fillRect(47,247,6,6);
    context.moveTo(50,0);
    context.lineTo(46,6);
    context.lineTo(54,6);
    context.lineTo(50,0);
    context.fill();
    context.moveTo(500,250);
    context.lineTo(496,246);
    context.lineTo(496,254);
    context.lineTo(500,250);
    context.fill();
    context.closePath();
    context.fillText('y',35,10);
    context.fillText('x',490,240);
    context.fillText('O',35,265);
    //PLOT AXIS MARKERS
    context.font='12px Arial';
    for(var i=50;i<500;i+=50){
        context.fillRect(i,247,1,6);
        p=Math.round((i-50)/50);
        if(p>0){
            context.fillText(p.toString(),i,270);
        }
    }
    for(var i=250;i>0;i-=50){
        context.fillRect(47,i,6,1);
        p=Math.round((250-i)/50);
        if(p>0){
            context.fillText(p.toString(),35,i);
        }
    }
    //PLOT X/2
    context.fillStyle='#800637';
    context.strokeStyle='#800637';
    context.beginPath();
    context.fillRect(149,199,2,2);
    context.fillRect(449,49,2,2);
    context.moveTo(150,200);
    context.lineTo(450,50);
    context.fillText('f(x)=x/2',300,100);
    context.stroke();
    context.closePath();
    
}

function application_1_use(value){
    application_1_start();
    var app1=document.getElementById("application_1");
    var context=app1.getContext("2d");
    document.getElementById('v').innerHTML="v="+value;
    document.getElementById('v_2').innerHTML=value;
    dx=Math.round(((8-2)/value)*100)/100;
    document.getElementById('dx').innerHTML=dx;
    width=6/value;
    width=(450-150)*width;
    context.fillStyle='#0b67b8';
    context.strokeStyle='#0b67b8';
    area=0;
    for(var i=150;i<450;i+=width){
        if(i+width<450){
            context.fillRect(i,246,1,8);
            context.beginPath();
            context.moveTo(i,250);
            context.lineTo(i,f(i));
            context.moveTo(i,f(i));
            context.lineTo(i+width,f(i));
            context.moveTo(i+width,f(i));
            context.stroke();
            context.closePath();
            area+=(f(i)-50)*width;
        }else{
            context.fillRect(i,246,1,8);
            context.beginPath();
            context.moveTo(i,250);
            context.lineTo(i,f(i));
            context.moveTo(i,f(i));
            context.lineTo(450,f(i));
            context.stroke();
            context.closePath();
            area+=(f(i)-50)*(450-i);
        }

    }
    percentage=(value-1)/(100-1);
    percentage=(0.988-0.334)*percentage+0.334;
    document.getElementById('area').innerHTML=Math.round(15*percentage*1000)/1000;
    percentage=percentage*100;
    document.getElementById('area_percentage').innerHTML=Math.round(percentage*100)/100;
    
}


function f(i){
    y=(i-200)/(450-200);
    return 195-(120*y+21);
}

function f2x(x){
    return Math.pow(2,x);
}

function on_graph(i){
    j=i/50-5;
    s=(f2x(j)-f2x(-4))/(f2x(3)-f2x(-4));
    s=450-400*s;
    return s;
}

function application_2_start(){
    var app2=document.getElementById("application_2");
    var context=app2.getContext("2d");
    //INITIALIZE
    context.clearRect(0,0,app2.width,app2.height);
    context.fillStyle='black';
    context.strokeStyle='black';
    context.font='15px Arial';
    context.setLineDash([]);
    //PLOT AXES
    context.beginPath();
    context.moveTo(0,450);
    context.lineTo(500,450);
    context.stroke();
    context.moveTo(250,0);
    context.lineTo(250,500);
    context.stroke();
    context.fillRect(247,447,6,6);
    context.fillText("O",255,465);
    context.fillText('y',230,10);
    context.fillText('x',490,440);
    context.font='12px Arial';
    for(i=0;i<500;i+=50){
        if(i!=0){
            context.fillRect(i,447,1,6);
        }
        if(i!=0 && i!=500 && i!=250){
            context.fillText((Math.round(i/50)-5).toString(),i,465);
        }
    }
    for(i=0;i<500;i+=50){
        if(i!=0){
            context.fillRect(247,i,6,1);
        }
        if(i!=500 && i!=0 && i!=450){
            context.fillText((9-Math.round(i/50)).toString(),235,i);
        }
    }
    context.closePath();

    //PLOT GRAPH
    context.strokeStyle='#800637';
    context.fillStyle='#800637';
    for(var i=50;i<=400;i+=5){
        s=on_graph(i);
        context.fillRect(i-1,s-1,2,2);
        if(i+5<=400){
            context.beginPath();
            context.moveTo(i,s);
            context.lineTo(i+5,on_graph(i+5));
            context.stroke();
            context.closePath();
        }
        
    }
}

function application_2_a(value){
    document.getElementById('a_value').innerHTML=value;
    plot_area();
}

function application_2_b(value){
    document.getElementById('b_value').innerHTML=value;
    plot_area();
}

function plot_area(){
    application_2_start();
    var app2=document.getElementById("application_2");
    var context=app2.getContext("2d");
    context.strokeStyle='#0b67b8';
    context.fillStyle='#0b67b8';

    a=(document.getElementById('a_value').innerHTML-(-4))/(3-(-4));
    a=a*350+50;
    context.beginPath();
    context.moveTo(a,450);
    context.lineTo(a,on_graph(a));

    b=(document.getElementById('b_value').innerHTML-(-4))/(3-(-4));
    b=b*350+50;
    context.strokeStyle='#0b67b8';
    context.fillStyle='#0b67b8';
    context.moveTo(b,on_graph(b));
    context.lineTo(b,450);
    context.stroke();

    if(a<b){
        for(var i=a;i<=b;i+=5){
            context.moveTo(i,on_graph(i));
            context.lineTo(i,450);
            context.stroke();
        }
    }else{
        for(var i=b;i<=a;i+=5){
            context.moveTo(i,on_graph(i));
            context.lineTo(i,450);
            context.stroke();
        }
    }


    

    context.closePath();

    gb=Math.round((f2x(document.getElementById('b_value').innerHTML)/Math.log(2))*100)/100;
    ga=Math.round((f2x(document.getElementById('a_value').innerHTML)/Math.log(2))*100)/100;

    document.getElementById("int_a").innerHTML=document.getElementById('a_value').innerHTML;
    document.getElementById("int_b").innerHTML=document.getElementById('b_value').innerHTML;
    if(a<=b){
        document.getElementById("app_2_result").innerHTML="G("+document.getElementById('b_value').innerHTML+")-G("+document.getElementById('a_value').innerHTML+")="+gb+"-"+ga+"="+(Math.round((gb-ga)*1000)/1000).toString();
    }else{
        document.getElementById("app_2_result").innerHTML="-(G("+document.getElementById('a_value').innerHTML+")-G("+document.getElementById('b_value').innerHTML+"))=-("+ga+"-"+gb+")="+(-Math.round((ga-gb)*1000)/1000).toString();
    }

}

function application_3_start(){
    var app3=document.getElementById("application_3");
    var context=app3.getContext("2d");
    //INITIALIZE
    
    context.fillStyle='black';
    context.strokeStyle='black';
    context.font='12px Arial';
    context.setLineDash([]);
    context.clearRect(0,0,app3.width,app3.height);
    //PLOT AXES
    context.beginPath();
    context.moveTo(0,150);
    context.lineTo(400,150);
    context.stroke();
    context.moveTo(180,0);
    context.lineTo(180,300);
    context.stroke();
    context.closePath();
    //PLOT GRAPH
    context.strokeStyle='#800637';
    var i=90/180*Math.PI/9;
    var counter=0;
    context.moveTo(0,180);
    context.beginPath();
    for(x=0;x<450;x+=5){
        y=180-Math.sin(counter)*120-30;
        context.lineTo(x,y);
        counter=counter+i;
    }
    context.stroke();
    context.closePath();
    //PLOT POINTS
    context.fillRect(-2,148,4,4);
    context.fillText('-2π',2,165);
    context.fillRect(43,148,4,4);
    context.fillText('-3π/2',43,165);
    context.fillRect(88,148,4,4);
    context.fillText('-π',98,165);
    context.fillRect(133,148,4,4);
    context.fillText('-π/2',133,165);
    context.fillRect(178,148,4,4);
    context.fillText('0',182,165);
    context.fillRect(223,148,4,4);
    context.fillText('π/2',223,165);
    context.fillRect(268,148,4,4);
    context.fillText('π',278,165);
    context.fillRect(313,148,4,4);
    context.fillText('3π/2',300,165);
    context.fillRect(358,148,4,4);
    context.fillText('2π',336,165);

    context.strokeStyle='black';
    context.fillRect(178,26,4,4);
    context.setLineDash([6,10]);
    context.beginPath();
    context.moveTo(0,28);
    context.lineTo(380,28);
    context.stroke();
    context.fillText('1',182,22);
    context.fillRect(178,266,4,4);
    context.moveTo(0,272);
    context.lineTo(380,272);
    context.stroke();
    context.closePath();
    context.fillText("-1",182,266);
    context.beginPath();
    context.moveTo(45,150);
    context.lineTo(45,22);
    context.stroke();
    context.moveTo(135,150);
    context.lineTo(135,268);
    context.stroke();
    context.moveTo(225,150);
    context.lineTo(225,22);
    context.stroke();
    context.strokeStyle='black';
    context.moveTo(315,150);
    context.lineTo(315,268);
    context.stroke();
    context.closePath();
}

function application_3_use(value){
    application_3_start();
    var app3=document.getElementById("application_3");
    var context=app3.getContext("2d");
    context.fillStyle='#0b67b8';
    context.strokeStyle='#0b67b8';
    context.setLineDash([]);
    x=2*(value-50)/100;
    x=2*Math.PI*x;
    x=Math.round(x*100)/100;
    document.getElementById('app_3_a_value').innerHTML=x+' rad';
    document.getElementById('app_3_ma_int').innerHTML=-x;
    document.getElementById('app_3_a_int').innerHTML=x;
    document.getElementById('app_3_ma_int_g').innerHTML=-x;
    document.getElementById('app_3_a_int_g').innerHTML=x;
    document.getElementById('app_3_ma_int_syn').innerHTML=-x;
    document.getElementById('app_3_a_int_syn').innerHTML=x;
    sina=Math.round(Math.cos(x)*100)/100;
    sinma=Math.round(Math.cos(-x)*100)/100;
    document.getElementById('syn_a').innerHTML=sina;
    if(sinma<0){
        document.getElementById('syn_ma').innerHTML='('+sinma+')';
    }else{
        document.getElementById('syn_ma').innerHTML=sinma;
    }
    document.getElementById('result_app_3').innerHTML=sina-sinma;
    a=360*(value/100);
    if(a<180){
        a=360-a;
    }
    context.fillRect(a-2,148,4,4);
    context.fillRect(360-a-2,148,4,4);
    //plot area
    context.beginPath();
    var increase = 90 / 180 * Math.PI / 9;
    counter=0;
    for(var x=0;x<=360;x+=5){
        if(x<=a && x>=(360-a)){
            context.moveTo(x,150);
            m=180-Math.sin(counter)*120-30;
            context.lineTo(x,m);
            context.stroke();
        }
        counter+=increase;
    }
    
    context.closePath();
}

function application_4_start(){
    var app4=document.getElementById("application_4");
    var context=app4.getContext("2d");
    //INITIALIZE
    context.clearRect(0,0,app4.width,app4.height);
    context.fillStyle='black';
    context.strokeStyle='black';
    context.font='15px Arial';
    context.setLineDash([]);
    //PLOT AXES
    context.beginPath();
    context.moveTo(250,0);
    context.lineTo(250,500);
    context.stroke();
    context.moveTo(0,250);
    context.lineTo(500,250);
    context.stroke();
    context.closePath();
    //PLOT GRAPHS
    context.strokeStyle='#800637';
    //y=x
    context.beginPath();
    context.moveTo(500,0);
    context.lineTo(0,500);
    context.stroke();
    context.closePath();
    //y=x^3
    context.beginPath();
    for(var x=-250;x<=250;x+=5){
        context.moveTo(((250+x)),(500-(250+Math.pow(x,3)/10000)));
        context.lineTo(((250+(x+5))),(500-(250+Math.pow((x+5),3)/10000)));
        context.stroke();
    }
    context.closePath();
    //DRAW POINTS
    context.font='12px Arial';
    context.fillRect(248,248,4,4);
    context.fillText('O',255,265);
    context.fillRect(348,148,4,4);
    context.fillRect(148,348,4,4);
    context.setLineDash([5,10]);
    context.beginPath();
    context.moveTo(350,250);
    context.lineTo(350,150);
    context.stroke();
    context.fillText('1',350,265);
    context.moveTo(250,150);
    context.lineTo(350,150);
    context.stroke();
    context.fillText('1',240,150);
    context.moveTo(150,250);
    context.lineTo(150,350);
    context.stroke();
    context.fillText('-1',150,245);
    context.moveTo(250,350);
    context.lineTo(150,350);
    context.stroke();
    context.fillText('-1',255,350);
    context.closePath();
    context.fillText('y',255,10);
    context.fillText('x',490,245);
    context.moveTo(500,250);
    context.lineTo(496,246);
    context.lineTo(496,254);
    context.lineTo(500,250);
    context.fill();
    context.moveTo(250,0);
    context.lineTo(246,5);
    context.lineTo(254,5);
    context.lineTo(250,0);
    context.fill();
    context.fillText('f(x)=x',460,50);
    context.fillText('g(x)=x³',330,50);
}

function application_4_a(value){
    a=value/100;
    a=2*a-1;
    a=Math.round(a*100)/100;
    document.getElementById("app_4_a_value").innerHTML=a;
    application_4_plot_area();
}

function application_4_b(value){
    b=value/100;
    b=2*b-1;
    b=Math.round(b*100)/100;
    document.getElementById("app_4_b_value").innerHTML=b;
    application_4_plot_area();
}

function application_4_plot_area(){
    application_4_start();
    var app4=document.getElementById("application_4");
    var context=app4.getContext("2d");
    a=document.getElementById("app_4_a_value").innerHTML;
    b=document.getElementById("app_4_b_value").innerHTML;
    document.getElementById("app_4_a_result").innerHTML=a;
    document.getElementById("app_4_b_result").innerHTML=b;
    a=(a-(-1))/(1-(-1));
    b=(b-(-1))/(1-(-1));
    a=200*a+150;
    b=200*b+150;
    context.fillRect(a-2,248,4,4);
    context.fillRect(b-2,248,4,4);
    xa=a-250;
    yx3a=500-(250+Math.pow(xa,3)/10000);
    xb=b-250;
    yx3b=500-(250+Math.pow(xb,3)/10000);
    context.fillRect(((250+xa)-2),(yx3a-2),4,4);
    context.fillRect(((250+xb)-2),(yx3b-2),4,4);
    context.setLineDash([5,10]);
    context.beginPath();
    context.moveTo(a,250);
    context.lineTo(a,yx3a);
    context.stroke();
    context.moveTo(b,250);
    context.lineTo(b,yx3b);
    context.stroke();
    context.closePath();

    yxa=500-a;
    context.fillRect(a-2,yxa-2,4,4);

    yxb=500-b;
    context.fillRect(b-2,yxb-2,4,4);

    context.strokeStyle='#0b67b8';
    context.setLineDash([]);

    context.beginPath();
    if(a<b){
        for(i=a;i<b;i++){
            yxi=500-i;
            xi=i-250;
            yx3i=500-(250+Math.pow(xi,3)/10000);
            context.moveTo(i,yxi);
            context.lineTo(i,yx3i);
            context.stroke();
        }
    }else{
        for(i=b;i<a;i++){
            yxi=500-i;
            xi=i-250;
            yx3i=500-(250+Math.pow(xi,3)/10000);
            context.moveTo(i,yxi);
            context.lineTo(i,yx3i);
            context.stroke();
        }
    }
    context.closePath();

    a=document.getElementById("app_4_a_value").innerHTML;
    b=document.getElementById("app_4_b_value").innerHTML;

    result=0;
    if(a<b){
        if(a<0 && b<0){
            result=(Math.pow(b,4)/4-Math.pow(b,2)/2)-(Math.pow(a,4)/4-Math.pow(a,2)/2);
        }else if(a<0 && b>0){
            result=-(Math.pow(a,4)/4-Math.pow(a,2)/2)+(Math.pow(b,2)/2-Math.pow(b,4)/4);
        }else if(a>0 && b>0){
            result=(Math.pow(b,2)/2-Math.pow(b,4)/4)+(Math.pow(a,2)/2-Math.pow(a,4)/4);
        }
    }else if(a>b){
        if(b<0 && a<0){
            result=(Math.pow(a,4)/4-Math.pow(a,2)/2)-(Math.pow(b,4)/4-Math.pow(b,2)/2)
        }else if(b<0 && a>0){
            result=-(Math.pow(b,4)/4-Math.pow(b,2)/2)+(Math.pow(a,2)/2-Math.pow(a,4)/4);
        }else if(b>0 && a>0){
            result=(Math.pow(a,2)/2-Math.pow(a,4)/4)+(Math.pow(b,2)/2-Math.pow(b,4)/4);
        }
    }
    document.getElementById('app_4_result').innerHTML=Math.round(result*100)/100+" τμ";

}