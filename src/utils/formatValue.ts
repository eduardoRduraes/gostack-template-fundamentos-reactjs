const formatValue = (value: number): string =>
  Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'BRl',
  }).format(value);

export default formatValue;
