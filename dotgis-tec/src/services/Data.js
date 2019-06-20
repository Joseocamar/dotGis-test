
export const Data = (labels,data,backgroundArrColor) => ({
    labels : labels,
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
