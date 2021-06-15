const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs-extra')
const hbs = require('handlebars')

const data = require('./database.json')

console.log('okee')

const compile = async (templateName, data) => {
    const filePath = path.join(process.cwd(), `templates`, `${templateName}.hbs`)
    const html = await fs.readFile(filePath, 'utf-8')

    return hbs.compile(html)(data)
}

const pdf = async () => {
    try {

        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        const html = await fs.readFile("./cetakanNonLikuidasi.html", "utf8")

        // const content = await compile('lkpmTerkirim', data)
        // console.log(content)

        await page.setContent(html)
        await page.emulateMediaType('screen')
        await page.pdf({
            path: 'cetakanNonLikuidasi.pdf',
            format: 'A4',
            printBackground: true
        })

        console.log('done')
        await browser.close()
        process.exit()


    } catch(e) {
        console.log('our error', e)
    }
}

pdf()