#include<graphics.h>
#include <stdio.h>
#include<X11/Xlib.h>
int main()
{
int gd = DETECT, gm, color;
initgraph(&gd, &gm, NULL);
putpixel(85, 35, GREEN);
putpixel(30, 40, RED);
putpixel(115, 50, YELLOW);
putpixel(135, 50, CYAN);
putpixel(45, 60, BLUE);
putpixel(20, 100, WHITE);
putpixel(200, 100, LIGHTBLUE);
putpixel(150, 100, LIGHTGREEN);
putpixel(200, 50, YELLOW);
putpixel(120, 70, RED);
delay(10000);
closegraph();
return 0;
}
