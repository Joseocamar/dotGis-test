
export const Data = (labels, label,data,backgroundArrColor) => ({
    labels : labels,
    datasets : [{
        label: label,
        fill: false,
        showLine: true,
        data: data,
        backgroundColor: backgroundArrColor,
        borderColor: '#000000',
        borderWidth: 1
    }]
  })
