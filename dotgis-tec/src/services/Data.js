
export const Data = (label,data,backgroundArrColor) => ({
    labels : label,
    datasets : [{
        label: 'Cº',
        fill: false,
        showLine: true,
        data: data,
        backgroundColor: backgroundArrColor,
        borderColor: '#000000',
        borderWidth: 1
    }]
  })
