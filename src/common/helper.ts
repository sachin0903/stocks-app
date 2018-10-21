import * as mockData from './mockData.json';

export const dividendYieldCommon = (lastDividend: number, price: number) => {
    return (lastDividend / price);
}

export const dividendYieldPreferred = (fixedDividend: number, parValue: number, price: number) => {
    return ((fixedDividend * parValue)/price);
}

export const peRatio = (price: number, dividend: number) => {
    return (price/dividend);
}

export const geometricMean = (val: number[]) => {
    if (val.length === 0) {
        return 0.0;
    }

    let gm = 1.0;

    val.forEach((data) => {
        gm *= data
    });

    gm = Math.pow(gm, (1.0 / val.length))

    return gm;
}

export const volumeWightedPrice = (...stocks) => {
    if (stocks.length===1&&Array.isArray(stocks[0])){
        stocks=stocks[0]
    }
    if (!stocks.length) {
        return 0
    }

    return stocks.reduce((s,x)=>s+(x.price*x.noOfShares),0)/
        stocks.reduce((s,x)=>s+Number(x.noOfShares),0)||0;
  }

export const orderBy = (stocks: any) => {
    return stocks.sort((a, b) => {
        const dateA = new Date(a.timestamp);
        const dateB = new Date(b.timestamp);
        return dateB.getTime() - dateA.getTime()
    });
}

export const calculateData = (stocks: any, stock: any) => {
    const exchangeData = JSON.parse(JSON.stringify(mockData));

    const stocksData = orderBy(stocks.filter((data) => {
        return data.stockSymbol === stock.stockSymbol;
    }));

    const masterData = exchangeData.filter((excahge) => {
        return excahge.stockSymbol === stock.stockSymbol;
    })[0];


    if (masterData) {
        const dividend = masterData.type === 'Common' 
            ? dividendYieldCommon(masterData.lastDividend, stocksData[0].price)
            : dividendYieldPreferred(masterData.fixedDividend, masterData.parValue, stocksData[0].price); 
        
        const peRatioData =  dividend !==0 ? peRatio(stocksData[0].price, dividend) : 0;

        const geoMean = geometricMean(stocksData.map(data=> data.price));

        const weightedPrice = volumeWightedPrice(stocksData);
        
        return {
            dividend,
            geometricMean:geoMean,
            peRatio: peRatioData,
            stockSymbol:stocksData[0].stockSymbol,
            volumeWeightedPrice:weightedPrice
        };

    }

        
    return null;
}