// Item class
function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

// Item class creator / updateQuality static methods
class GildedRose {

  static BACKSTAGE_PASS = 'Backstage passes to a TAFKAL80ETC concert'
  static AGED_BRIE = 'Aged Brie'
  static SULFURAS = 'Sulfuras, Hand of Ragnaros'
  static MAX_QUALITY = 50
  static MIN_QUALITY = 0

  static createItem(name, sell_in, quality) {
    return new Item(name, sell_in, quality)
  }

  static updateQuality(items) {

    // static constants
    const { MAX_QUALITY, MIN_QUALITY, BACKSTAGE_PASS, AGED_BRIE, SULFURAS } = GildedRose

    items.forEach((item) => {
      let qualityIncrement
      let sellInIncrement
      let ignoreItem = false

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
      } else if (item.name === SULFURAS) {
        ignoreItem = true
      } else {
        if (item.sell_in < 0) {
          qualityIncrement = -2
        } else {
          qualityIncrement = -1
        }
      }

      if (!sellInIncrement) {
        sellInIncrement = -1
      }

      if (!ignoreItem) {
        if (!qualityIncrement) {
          item.quality = 0
        } else {
          let newQuality = item.quality + qualityIncrement

          if (newQuality > MAX_QUALITY) {
            newQuality = MAX_QUALITY
          } else if (newQuality < MIN_QUALITY) {
            newQuality = MIN_QUALITY
          }

          item.quality = newQuality
          item.sell_in += sellInIncrement          
        } 
      }
    })

    return items

    // for (var i = 0; i < items.length; i++) {
    //   if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //     if (items[i].quality > 0) {
    //       if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //         items[i].quality = items[i].quality - 1
    //       }
    //     }
    //   } else {
    //     if (items[i].quality < 50) {
    //       items[i].quality = items[i].quality + 1
    //       if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (items[i].sell_in < 11) {
    //           if (items[i].quality < 50) {
    //             items[i].quality = items[i].quality + 1
    //           }
    //         }
    //         if (items[i].sell_in < 6) {
    //           if (items[i].quality < 50) {
    //             items[i].quality = items[i].quality + 1
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //     items[i].sell_in = items[i].sell_in - 1;
    //   }
    //   if (items[i].sell_in < 0) {
    //     if (items[i].name != 'Aged Brie') {
    //       if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (items[i].quality > 0) {
    //           if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //             items[i].quality = items[i].quality - 1
    //           }
    //         }
    //       } else {
    //         items[i].quality = items[i].quality - items[i].quality
    //       }
    //     } else {
    //       if (items[i].quality < 50) {
    //         items[i].quality = items[i].quality + 1
    //       }
    //     }
    //   }
    // }
  
    // return items
  }
}