// Item class
function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

// Item class creator / updateQuality static methods
class GildedRose {

  static BACKSTAGE_PASS = 'Backstage passes to a TAFKAL80ETC concert'
  static CONJURED_CAKE = 'Conjured Mana Cake'
  static AGED_BRIE = 'Aged Brie'
  static SULFURAS = 'Sulfuras, Hand of Ragnaros'
  static MAX_QUALITY = 50
  static MIN_QUALITY = 0

  static createItem(name, sell_in, quality) {
    return new Item(name, sell_in, quality)
  }

  static checkQuality(newQuality) {
    const { MAX_QUALITY, MIN_QUALITY } = GildedRose

    if (newQuality > MAX_QUALITY) {
      return MAX_QUALITY
    } else if (newQuality < MIN_QUALITY) {
      return MIN_QUALITY
    }

    return newQuality
  }

  static updateQuality(items) {

    // static vars
    const { checkQuality, BACKSTAGE_PASS, AGED_BRIE, SULFURAS, CONJURED_CAKE } = GildedRose

    for (let i = 0, itemLen = items.length; i < itemLen; i ++) {
      const item = items[i]

      if (item.name === SULFURAS) {
        break
      }

      let qualityIncrement

      if (item.name === BACKSTAGE_PASS) {
        if (item.sell_in > 0 && item.sell_in <= 5) {
          qualityIncrement = 3
        } else if (item.sell_in >= 5 && item.sell_in <= 10) {
          qualityIncrement = 2
        } else if (item.sell_in > 10) {
          qualityIncrement = 1
        }
      } else if (item.name === AGED_BRIE) {
        qualityIncrement = 1
      } else {
        const qualityMultiplier = item.name === CONJURED_CAKE ? 2 : 1
        
        if (item.sell_in < 0) {
          qualityIncrement = -2 * qualityMultiplier
        } else {
          qualityIncrement = -1 * qualityMultiplier
        }
      }

      if (!qualityIncrement) {
        item.quality = 0
      } else {
        let newQuality = item.quality + qualityIncrement       

        item.quality = checkQuality(newQuality)
        item.sell_in -= 1
      } 
    }

    return items

  }
}