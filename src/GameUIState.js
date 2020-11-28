import { makeAutoObservable } from 'mobx';
import { InventoryItemTypes, ArmorItemTypes, WeaponItemTypes } from './ItemTypes';

export class GameUIState {
    characterStats = {
        health: 1.0,
        energy: 1.0
    }

    primarySlot = null
    secondarySlot = null

    armorSlots = {
        helmet: null,
        chest: null,
        gloves: null,
        pants: null,
        boots: null
    }

    getArmorSlot(slotType) {
        switch(slotType) {
            case ArmorItemTypes.HELMET:
                return this.armorSlots.helmet;
            case ArmorItemTypes.CHEST:
               return this.armorSlots.chest;
            case ArmorItemTypes.GLOVES:
                return this.armorSlots.gloves;
            case ArmorItemTypes.PANTS:
               return this.armorSlots.pants;
            case ArmorItemTypes.BOOTS:
               return this.armorSlots.boots;
        }
    }

    setArmorSlot(slotType, item) {
        switch(slotType) {
            case ArmorItemTypes.HELMET:
                this.armorSlots.helmet = item;
                break;
            case ArmorItemTypes.CHEST:
                this.armorSlots.chest = item;
                break;
            case ArmorItemTypes.GLOVES:
                this.armorSlots.gloves = item;
                break;
            case ArmorItemTypes.PANTS:
                this.armorSlots.pants = item;
                break;
            case ArmorItemTypes.BOOTS:
                this.armorSlots.boots = item;
                break;
        }
    }

    inventory = [{
        itemType: InventoryItemTypes.ARMOR,
        icon: 'fad fa-helmet-battle',
        kindType: ArmorItemTypes.HELMET,
        name: 'HELM 1'
    },
    {
        itemType: InventoryItemTypes.ARMOR,
        icon: 'fad fa-helmet-battle',
        kindType: ArmorItemTypes.CHEST,
        name: 'CHEST 4'
    },
    {
        itemType: InventoryItemTypes.ARMOR,
        icon: 'fad fa-helmet-battle',
        kindType: ArmorItemTypes.GLOVES,
        name: 'GLOVES 3'
    },
    {
        itemType: InventoryItemTypes.ARMOR,
        icon: 'fad fa-helmet-battle',
        kindType: ArmorItemTypes.PANTS,
        name: 'PANTS 5'
    },
    {
        itemType: InventoryItemTypes.ARMOR,
        icon: 'fad fa-helmet-battle',
        kindType: ArmorItemTypes.BOOTS,
        name: 'BOOTS 2'
    },
    {
        itemType: InventoryItemTypes.WEAPON,
        icon: 'fad fa-swords',
        kindType: WeaponItemTypes.SWORD,
        name: 'SWORD 1'
    },
    {
        itemType: InventoryItemTypes.WEAPON,
        icon: 'fad fa-swords',
        kindType: WeaponItemTypes.SWORD,
        name: 'SWORD 2'
    },
    {
        itemType: InventoryItemTypes.WEAPON,
        icon: 'fad fa-swords',
        kindType: WeaponItemTypes.AXE,
        name: 'AXE 1'
    }]

    constructor() {
        makeAutoObservable(this);

        this.characterStats.health = 100;
        this.characterStats.energy = 100;
    }
}
