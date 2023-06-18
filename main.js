array_1=["pen", "paper", "book","bottle"];

random_no = Math.floor((Math.random()*array_1.length)+1);
console.log(array_1[random_no]);

sketch = array_1[random_no];

document.getElementById("stbd").innerHTML="Sketch to be drawn :"+sketch;

time_count = 0;
timer_check="";
draw_sketch="";
answer_holder="0";
score=0;