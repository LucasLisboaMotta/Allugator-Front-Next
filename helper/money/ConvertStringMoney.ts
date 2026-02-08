const ConvertStringMoney = (value: string): string => {
    const trimmed = value.trim();
    const lastComma = trimmed.lastIndexOf(',');
    const lastDot = trimmed.lastIndexOf('.');
    const sepIndex = Math.max(lastComma, lastDot);

    const rawInt = sepIndex >= 0 ? trimmed.slice(0, sepIndex) : trimmed;
    const rawDec = sepIndex >= 0 ? trimmed.slice(sepIndex + 1) : '';

    const intDigits = rawInt.replace(/\D/g, '');
    const decDigits = rawDec.replace(/\D/g, '');

    const formattedInt = intDigits.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    if (decDigits.length === 0) {
        return formattedInt;
    }

    return `${formattedInt},${decDigits}`;
}

export default ConvertStringMoney;