// Few URL's filtering functions

export const getLastLinksByAmount = (urls, amount) => {
    const originalLinks = []
    if (!urls) {
        return ['']
    }
    for (const [url] of Object.entries(urls).reverse().slice(0, amount)) {
        originalLinks.push(urls[url].longUrl)
    }
    return originalLinks
}

export const getLastClicksByAmount = (urls, amount) => {
    const clicks = []
    const urlsAmount = 0
    if (!urls) {
        return ['']
    }
    for (const [url] of Object.entries(urls).reverse().slice(0, amount)) {
        let amount = 0
        if (!urls[url].views) {
            clicks.push(amount)
            continue
        }
        for (const [view] of Object.entries(urls[url].views)) {
            amount = amount + urls[url].views[view].amount
        }
        clicks.push(amount)
    }
    return clicks
}

export const getLastIpsByAmount = (urls, amount) => {
    if (!urls) {
        return 0
    }
    const ips = []
    let amountOfIps = 0
    for (const [url] of Object.entries(urls)) {
        if (!urls[url].views) {
            continue
        }
        for (const [view] of Object.entries(urls[url].views)) {
            if (amountOfIps === amount) break
            ips.push(view)
            amountOfIps++
        }
    }
    return ips
}

export const getViewsAmount = (urls) => {
    let totalAmount = 0
    if (!urls) {
        return 0
    }
    for (const [url] of Object.entries(urls)) {
        if (!urls[url].views) {
            continue
        }
        for (const [view] of Object.entries(urls[url].views)) {
            totalAmount = totalAmount + urls[url].views[view].amount
        }
    }
    return totalAmount
}

export const getUrlsChartOptions = (url) => {
    return {
        chart: {
            id: 'basic-bar'
        },
        xaxis: {
            categories: url.views ? Object.keys(url.views).slice(0, 10) : ['']
        }
    }
}

export const getUrlChartData = (url) => {
    return [
        {
            name: 'Amount of clicks',
            data: url.views ? Object.values(url.views).slice(0, 10).map(view => view.amount) : []
        }
    ]
}

export const getAmountOfClicksByUrl = (url) => {
    if (!url || !url.views) {
        return 0
    }
    let amount = 0
    for (const [view] of Object.entries(url.views)) {
        amount = amount + url.views[view].amount
    }
    return amount
}