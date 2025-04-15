export const kelvinToCelsius = (k) => (k - 273.15).toFixed(1)
export const formatNumber = (num) => new Intl.NumberFormat().format(num)
