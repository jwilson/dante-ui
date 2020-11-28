import { makeAutoObservable } from 'mobx';
import { InventoryItemTypes, ArmorItemTypes, WeaponItemTypes } from './ItemTypes';

export class GameUIState {
    characterStats = {
        health: 1.0,
        energy: 1.0
    }

    primarySlot = null
    secondarySlot = null

    armorSlots = {}

    inventory = [{
        itemType: InventoryItemTypes.ARMOR,
        icon: 'fad fa-helmet-battle',
        kindType: ArmorItemTypes.HELMET
    },
    {
        itemType: InventoryItemTypes.ARMOR,
        icon: 'fad fa-helmet-battle',
        kindType: ArmorItemTypes.CHEST
    },
    {
        itemType: InventoryItemTypes.ARMOR,
        icon: 'fad fa-helmet-battle',
        kindType: ArmorItemTypes.GLOVES
    },
    {
        itemType: InventoryItemTypes.ARMOR,
        icon: 'fad fa-helmet-battle',
        kindType: ArmorItemTypes.PANTS
    },
    {
        itemType: InventoryItemTypes.ARMOR,
        icon: 'fad fa-helmet-battle',
        kindType: ArmorItemTypes.BOOTS
    },
    {
        itemType: InventoryItemTypes.WEAPON,
        icon: 'fad fa-swords',
        kindType: WeaponItemTypes.SWORD
    }]

    constructor() {
        makeAutoObservable(this);
        this.characterStats.health = 100;
        this.characterStats.energy = 100;

        this.armorSlots[ArmorItemTypes.HELMET] = null;
        this.armorSlots[ArmorItemTypes.CHEST] = null;
        this.armorSlots[ArmorItemTypes.GLOVES] = null;
        this.armorSlots[ArmorItemTypes.PANTS] = null;
        this.armorSlots[ArmorItemTypes.BOOTS] = null;
    }
}
