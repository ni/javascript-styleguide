// This is a list of standard element attributes to ignore
// when applying the @angular-eslint/template/i18n rule
// that requires attributes to be tagged as localizable.
//
// New attributes can be added here that are for element
// configuration and not for display, where localizing
// the attribute value would result in broken functionality.
//
// In cases of attribute collisions, the rule supports
// CSS selector style element[attribute] ignore entries
// which can be used to scope attribute ignores to specific
// elements.
const ignoreAttributeSets = {
    nimble: [
        'action-menu-slot',
        'activeid',
        'appearance',
        'appearance-variant',
        'appearanceVariant',
        'autocomplete',
        'column-id',
        'field-name',
        'format',
        'icon',
        'id-field-name',
        'key',
        'key-type',
        'nimbleRouterLink',
        'orientation',
        'queryParamsHandling',
        'resize',
        'selection-mode',
        'severity',
        'slot',
        'theme'
    ],
    systemlink: [
        // sl-workspace-selector
        'action',

        // sl-table
        'columnId',
        'decimalDigits',
        'fieldName',
        'format',
        'hrefFieldName',
        'idFieldName',
        'keyType',
        'labelFieldName',
        'selectionMode',
        'slTableColumnId',

        // sl-grid
        'columnSizeMode',
        'dataRowId',
        'dataSourceFingerprint',
        'gridId',
        'loadColumnStateBehavior',
        'parentDataField',

        // sl-query-builder
        'dropdownWidth',
    ],
    jqx: [
        // smart-table
        'sortMode',

        // smart-query-builder
        'applyMode',
        'fieldsMode'
    ],
    material: [
        'cdkDragPreviewContainer',
        'floatLabel',
        'fontIcon',
        'fontSet',
        'matColumnDef',
        'matTooltipClass',
    ]
};

const ignoreAttributes = {
    ...ignoreAttributeSets,
    all: Object.values(ignoreAttributeSets).flat()
};

module.exports = {
    ignoreAttributes
};