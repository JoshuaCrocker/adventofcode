module.exports = function(string, letter)
{
    let count = 0;

    for (let i = 0; i < string.length; i++)
    {
        if (string.substr(i, 1) == letter)
            count++;
    }

    return count;
};
