---
date: 2022-09-21-17:32
aliases:
  - Exponent Law
tags: 
publish: true
related:
  - "[[Mathematics|Mathematics]]"
---

## What is an Exponent?

Exponents are simply just abbreviations that makes it easy to write out a number multiplying by itself n amount of times. For example, looking at the expression of two to the power of three:
$$\text{base}\rightarrow2^{3\leftarrow\text{exponent}}$$
The base tells you what number to multiply by, and the exponent tells you how many times to multiply itself for.
In this example, the base is two, and the exponent is three. Therefore the expression can be expanded into 
$$2\times2\times2$$

Remember this simple definition of an exponent because exponent laws are again just abbreviation that encapsulates this definition to make evaluating them simpler.

## Exponent Laws
### Product with Same Base
When you multiply powers with common base, add the exponents keeping the same base:
$$a^na^m=a^{n+m}$$
This law can be easily explained by expanding the exponents into multiplication and then simplifying back into exponents. For example, ^0a079b
$$
\begin{align*}
(3^3) (3^2) &= (3\times3\times3)(3\times3) \\
&= 3\times3\times3\times3\times3 \\
3^{3+2}&= 3^5
\end{align*}
$$

### Quotient with Same Base
When you divide powers with common base, subtract the exponents keeping the same base:
$$\frac{a^n}{a^m}=a^{n-m}$$

This law likewise can be show by expanding into multiplication and then simplifying back into exponents:
$$
\begin{align*}
\frac{5^7}{5^4} &= \frac{5\times5\times5\times5\times5\times5\times5}{5\times5\times5\times5} \\
&=  \frac{5\times5\times5\times\bcancel5\times\bcancel5\times\bcancel5\times\bcancel5}{\bcancel5\times\bcancel5\times\bcancel5\times\bcancel5}\\
5^{7-4}&= 5^3
\end{align*}
$$

### Negative Power
Take the reciprocal (swap denominator and numerator) when you take negative powers:
$$\left(\frac{a}{b}\right)^{-x}=\left(\frac{b}{a}\right)^x$$
Negative exponents tells you how many times to divide a number by itself. Therefore, the law can be derived as shown below:
$$
\begin{align*}
    \frac{3}{4}^{-x} &= \frac{3^{-x}}{4^{-x}} \\
                     &= \frac{\left(\tfrac{1}{3}\right)^x}{\left(\tfrac{1}{4}\right)^x} \\
                     &= \left(\frac{1}{3}\right)^x \times \left(\frac{4}{1}\right)^x \\
                     &= \left(\frac{4}{3}\right)^x
\end{align*}
$$

### Zero Power

Anything to the power of zero equals to one (exception with $0^0$):
$$x^0=1$$
#### Explanation
This law can be shown simply using the [[Quotient with Same Base|Quotient with Same Base]] law.
$$
\begin{align*}
    \frac{x^n}{x^n} &= x^{n-n} \\
                1   &= x^{0} \\
\end{align*}
$$
Dividing by the same number $x^n$ gives you 1. And since $x^{n-n}=x^0$, $x^0=1$.

### Power of Power
When you take the power of a power, multiply the power:

$$\left(a^n\right)^m=a^{n \times m}$$

This law can be derived by expanding the multiplications and then simplifying back into exponents.

$$
\begin{align*}
    (a^2)^3 &= (a^2)\times(a^2)\times(a^2) \\
                     &= (a\times a)\times (a\times a)\times (a\times a) \\
        a^{2\times3} &= a^6 \\
\end{align*}
$$

### Quotient to a Power
You can bring the exponents into the numerator and denominators when it is outside a parenthesis:

$$\left(\frac{a}{b}\right)^n=\frac{a^n}{b^n}$$


This law is an extension of the last law but applied to fractions.

$$
\begin{align*}
    \left(\frac{a}{b}\right)^3 &= \frac{a}{b}\times\frac{a}{b}\times\frac{a}{b} \\
                &=  \frac{a\times a\times a}{b\times b\times b} \\
                &= \frac{a^3}{b^3}
\end{align*}
$$

### Caution!
Please know that when taking to the power of an **even** number n there is a difference between $-x^n$ and $(-x)^n$.

For example, if n=2
$$(-3)^2=9 \quad \text{because} \quad (-3)^2=(-3)\times(-3)$$
Whereas,
$$-3^2=-9 \quad \text{because} \quad -3^2=-(3\times3)$$

This is because the exponent apply only to the number that is directly below it to the left. That means in the second case, the exponent 2 only applies to the number 3 and not -3. Therefore, the math can be expanded to $-(3\times3)$. Where as in the first case the math can be expanded to $(-3)\times(-3)$.


