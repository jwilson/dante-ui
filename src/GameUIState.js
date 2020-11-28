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

    hasArmor(slotType) {
        switch(slotType) {
            case ArmorItemTypes.HELMET:
                return this.armorSlots.helmet !== null;
            case ArmorItemTypes.CHEST:
               return this.armorSlots.chest !== null;
            case ArmorItemTypes.GLOVES:
                return this.armorSlots.gloves !== null;
            case ArmorItemTypes.PANTS:
               return this.armorSlots.pants !== null;
            case ArmorItemTypes.BOOTS:
               return this.armorSlots.boots !== null;
        }
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
        icon: '/static/icons/500_armor/Helm_01.png',
        kindType: ArmorItemTypes.HELMET,
        name: 'HELM 1',
        
    },
    {
        itemType: InventoryItemTypes.ARMOR,
        icon: '/static/icons/500_armor/Chest_14.png',
        kindType: ArmorItemTypes.CHEST,
        name: 'CHEST 4'
    },
    {
        itemType: InventoryItemTypes.ARMOR,
        icon: '/static/icons/500_armor/Gloves_07.png',
        kindType: ArmorItemTypes.GLOVES,
        name: 'GLOVES 3'
    },
    {
        itemType: InventoryItemTypes.ARMOR,
        icon: '/static/icons/500_armor/Pants_25.png',
        kindType: ArmorItemTypes.PANTS,
        name: 'PANTS 5'
    },
    {
        itemType: InventoryItemTypes.ARMOR,
        icon: '/static/icons/500_armor/Boots_22.png',
        kindType: ArmorItemTypes.BOOTS,
        name: 'BOOTS 2'
    },
    {
        itemType: InventoryItemTypes.WEAPON,
        icon: '/static/icons/500_weapons/Sword_17.png',
        kindType: WeaponItemTypes.SWORD,
        name: 'SWORD 1'
    },
    {
        itemType: InventoryItemTypes.WEAPON,
        icon: '/static/icons/500_weapons/Sword_24.png',
        kindType: WeaponItemTypes.SWORD,
        name: 'SWORD 2'
    },
    {
        itemType: InventoryItemTypes.WEAPON,
        icon: '/static/icons/500_weapons/Axe_02.png',
        kindType: WeaponItemTypes.AXE,
        name: 'AXE 1'
    }]

    constructor() {
        makeAutoObservable(this);

        this.characterStats.health = 100;
        this.characterStats.energy = 100;
    }
}
