---
date: 2024-02-28
aliases: 
title: Grade 10 Math
publish: true
---
-> [[./Analytic Geometry|Analytic Geometry]]

## Factoring
- Expanding -> multiplying
- Factoring -> Dividing

### FOIL (Multiplying Binomials)
- First: multiple the first numbers in both binomials
- Outer: multiply the outer numbers in both binomials
- Inner: multiply the inner numbers in both binomials
- Last: multiply the last numbers in both binomials
$$
\begin{align}
&= (x+2)(x+3)\\
&= x^2+3x+2x+6\\
&= x^2+5x+6
\end{align}
$$
### Common Factoring
> [!NOTE] Factor by Grouping
> 1. Group by terms with common factor
> 2. factor out common factor
> 3. factor the common binomial
> $$
> \begin{align}
> &=ac+bc+ad+bd\\
> &=(ac+bc) + (ad+bd)\\
> &=c(a+b) + d(a+b)\\
> &=(c+d)(a+b)
> \end{align}
> $$
> 

### Factoring Quadratics
![[../attachments/Grade 10 Math-20240320155132218.webp|center]]
- find two number $\phi$ and $\theta$ such that:
	- $\phi + \theta = b$
	- $\phi \times \theta = a\times c$
- when $a\neq1$
	- try to simplify $\frac{\theta}{a}$ and $\frac{\phi}{a}$
	- Another Method
		 ![[../attachments/Grade 10 Math-20240410165730191.webp|250|center]]
#### Special Products
> [!NOTE] Difference of Squares:
> 	$$a^2-b^2 = (a-b)(a+b)$$

> [!NOTE] Perfect Square Trinomial
> Note that the first and last term are perfect squares and the middle term is $2ab$.
> $$a^2+2ab+b^2=(a+b)^2$$
> $$a^2-2ab+b^2=(a-b)^2$$

## Quadratics
### Properties of Quadratic
- 2nd finite difference is constant for quadratic relationsihps
- The shape of a quadratic relation is called a **PARABOLA**
- If the parabola opens up, the vertex is a **minimum** point
- if the parabola opens down, the vertex is a **maximum** point
- Parabolas are symmetrical
- The vertical line that passes through the vertex is the **AXIS OF SYMMETRY**
![[../attachments/Grade 10 Math-20240403184556316.webp|center|]]

### Quadratics in Standard Form

> [!NOTE] Quadratics in Standard Form
> $$y=ax^2+bx+c$$
> >[!NOTE] Property of Quadratics in Standard Form
> > - if $a>0$, the parabola opens **UP**
> > - if $a<0$, the parabola opens **DOWN**
> > - the **y-intercept** is at $(0,c)$

You can calculate $x_{\text{vertex}}$ straight from the standard from using the equation below:
$$
x_{\text{vertex}}=\frac{-b}{2a}
$$
### Quadratics in Vertex Form
> [!NOTE] Quadratics in Vertex Form
> $$y=a(x-h)^2+k$$
> >[!NOTE] Property of Quadratics in Standard Form
> > - $k$, affects vertical translation
> > 	- $k > 0$, moves **UP**
> > 	- $k < 0$, moves **DOWN**
> > - $h$, affects horizontal translation
> > 	- $h > 0$, moves **LEFT**
> > 	- $h < 0$, moves **RIGHT**
> > - the **y-intercept** is at $(0,c)$


### Quadratics in Factored Form
> [!NOTE] Quadratics in Factored Form
> $$y=a(x-r)(x-s)$$
> >[!NOTE] Properties of Quadratics in Standard Form
> > - x-int at $r$ and $s$ (the value of x that make each factor equal 0)
> > - $a>0$, opens up
> > - $a<0$, opens down
> > - Axis of symmetry at $y=\frac{r+s}{2}$
> > - the x-coordinate of the vertex is the average of the x-intercepts $(\frac{r+s}{2})$


> [!NOTE] Zero Product Rule
> The product of factors is zero if one or more of the factors are zero
> $$ab=0 \quad\text{if}\quad a=0 \quad\text{or}\quad b=0 \quad \text{(or both)}$$

^47271e

## Solving Quadratic Equations
### Solve Quadratics By Factoring
- Get equation in [[Grade 10 Math#Quadratics in Standard Form|standard form]]
- Factor the equation
- Use [[Grade 10 Math#^47271e|Zero Product Rule]]

### Solve Quadratics by Completing the Square
- Completing the Square is a process to convert standard form to vertex form
- `b`, `+` and `-` $(\frac{b}{2})^2$
### Solve by Quadratic Formula

> [!NOTE] Quadratic Formula
> $$
> x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
> $$
> Can be used to solve for rational, irrational, and non-real solutions to any quadratic equation in the form $ax^2+bx+c=0$.
>> [!Example]- Proof from Completing the Square
>> $$
>> \begin{align}
>> ax^2+bx+c&=0 \\
>> a(x^2+\frac{b}{a}x)+c&=0 \\
>> a(x^2+\frac{b}{a}x+\frac{b^2}{4a^2}-\frac{b^2}{4a^2})+c&=0\\
>> a(x^2+\frac{b}{a}x+\frac{b^2}{4a^2})-\frac{b^2}{4a}+c&=0\\
>> a(x+\frac{b}{2a})^2&=\frac{b^2}{4a}-\frac{c}{1}\times\frac{4a}{4a} \\
>> a(x+\frac{b}{2a})^2&=\frac{b^2-4ac}{4a}\\
>> (x+\frac{b}{2a})^2&=\frac{b^2-4ac}{4a^2} \\
>> x+\frac{b}{2a}&=\frac{\pm\sqrt{b^2-4ac}}{\sqrt{4a^2}} \\
>> x+\frac{b}{2a}&=\frac{\pm\sqrt{b^2-4ac}}{2a} \\
>> x&=-\frac{b}{2a}\pm\frac{\sqrt{b^2-4ac}}{2a} \\
>> x&=\frac{-b\pm\sqrt{b^2-4ac}}{2a} \\
>> \end{align}
>> $$
#### The Discriminant
> [!NOTE] The Discriminant
> $$
> D = b^2-4ac
> $$
> > [!NOTE]- Properties of the Discriminant
> > - $D < 0$, no real solution
> > - $D = 0$,  one solution
> > - $D > 0$, two solution
> > - $D$ is a perfect square, the quadratic is factorable
## Trigonometry
### Similar Triangles
- Triangles that have the same angles, but different sizes
- $\triangle EAD \sim \triangle CAB$

#### Proving Triangles are similar
- 3 Ways
	1. Angle Angle similarity (2 angles are equal)
	2. Side Side Side similarity (all ratios of sides are equal)
	3. Side Angle Side similarity (2 ratios of side and 1 angle are equal)

### SOH CAH TOA

![[../attachments/Grade 10 Math-20240410173602814.webp|250|center]]

$$
\sin(\theta)=\frac{\text{opposite}}{\text{{hypotenuse}}} \text{,}\quad \cos(\theta)=\frac{\text{adjacent}}{\text{{hypotenuse}}} \text{,}\quad 
\tan(\theta)=\frac{\text{opposite}}{\text{{adjacent}}}
$$

### Sine Law

> [!NOTE] Sine Law
> $$
> \frac{a}{\sin{A}} = \frac{b}{\sin{B}} = \frac{c}{\sin{C}}
> $$
> Sine law can be used with oblique and right-angle triangles

### Cosine Law

> [!NOTE] Cosine Law
> $$
> a^2=b^2+c^2-2bc(\cos{A})
> $$
> $$
> \cos{A}=\frac{a^2-b^2-c^2}{-2bc}
> $$

