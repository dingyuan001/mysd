setInterval(() => {
    document.body.innerText = new Date().toLocaleTimeString();
}, 1000);
class Calculator
{
    add(a, b)
    {
        return a + b;
    }
    sub(a, b)
    {
        return a - b;
    }
}