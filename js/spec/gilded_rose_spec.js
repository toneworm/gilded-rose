describe("Gilded Rose", () => {
  const { createItem, updateQuality } = GildedRose

  describe("updateQuality", () => {
    describe("Standard item", () => {
      const items = [
        createItem("Bacon sandwich", 15, 8),
        createItem("Chicken sandwich", 0, 0),
        createItem("Turkey sandwich", -2, 10),
      ]

      updateQuality(items)

      // Bacon sandwich
      it("should degrade the quality", () => {
        expect(items[0].quality).toEqual(7)
      })

      it("should reduce the sell_in day", () => {
        expect(items[0].sell_in).toEqual(14)
      })

      // Chicken sandwich
      it("should not degrade the quality if it is already 0", () => {
        expect(items[1].quality).toEqual(0)
      })

      // Turkey sandwich
      it("should degrade the quality twice as fast if sell_in date is negative", () => {
        expect(items[2].quality).toEqual(8)
      })
    })

    describe("Aged Brie", () => {
      const items = [
        createItem("Aged Brie", 15, 30),
        createItem("Aged Brie", 10, 50)
      ]
      
      updateQuality(items)

      it("should increase quality by 1", () => {
        expect(items[0].quality).toEqual(31)
      })

      it("should not increase quality above 50", () => {
        expect(items[1].quality).toEqual(50)
      })
    })

    describe("Backstage passes to a TAFKAL80ETC concert", () => {
      const items = [
        createItem("Backstage passes to a TAFKAL80ETC concert", 15, 25),
        createItem("Backstage passes to a TAFKAL80ETC concert", 10, 25),
        createItem("Backstage passes to a TAFKAL80ETC concert", 5, 25),
        createItem("Backstage passes to a TAFKAL80ETC concert", 0, 25),
        createItem("Backstage passes to a TAFKAL80ETC concert", 3, 50)
      ]

      updateQuality(items)

      it("should increase quality by 1 when sell_in greater than 10 days", () => {
        expect(items[0].quality).toEqual(26)
      })

      it("should increase quality by 2 when sell_in greater than 5 days and less than or equal to 10 days", () => {
        expect(items[1].quality).toEqual(27)
      })

      it("should increase quality by 3 when sell_in less than or equal to 5 days", () => {
        expect(items[2].quality).toEqual(28)
      })

      it("should reduce quality to 0 when sell_in is equal to 0 days", () => {
        expect(items[3].quality).toEqual(0)
      })

      it("should not increase quality above 50", () => {
        expect(items[4].quality).toEqual(50)
      })
    })

    describe("Sulfuras, Hand of Ragnaros", () => {
      const items = [ createItem("Sulfuras, Hand of Ragnaros", 15, 80) ]

      updateQuality(items)

      it("should not change in quality", () => {
        expect(items[0].quality).toEqual(80)
      })

      it("should not change in sell_in days", () => {
        expect(items[0].sell_in).toEqual(15)
      })
    })
  })
})