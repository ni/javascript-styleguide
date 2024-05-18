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
    web: [
        'aria-labelledby',
        'rel',
        'sizes',
        'slot',
        // Not possible for Angular i18n to handle meta tags yet
        // https://github.com/angular/angular-cli/issues/8947
        'meta[content]'
    ],
    nimble: [
        // shared
        'activeid',
        'anchor',
        'appearance',
        'appearance-variant',
        'autocomplete',
        'filter-mode',
        'format',
        'location',
        'orientation',
        'resize',
        'severity',
        'theme',

        // rich text
        'button-label',
        'display-name',
        'pattern',

        // table
        'action-menu-slot',
        'column-id',
        'field-name',
        'href-field-name',
        'icon',
        'id-field-name',
        'key',
        'key-type',
        'label-field-name',
        'parent-id-field-name',
        'selection-mode',
        'sort-direction',
        'width-mode',

        // nimble-angular
        'nimbleRouterLink',
        'queryParamsHandling'

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
        'widthMode',

        // sl-grid
        'columnSizeMode',
        'dataRowId',
        'dataSourceFingerprint',
        'gridId',
        'loadColumnStateBehavior',
        'parentDataField',

        // sl-split-button
        'appearanceVariant',

        // sl-query-builder
        'dropdownWidth',

        // native element attributes used by sl components
        'accept',
        'aria-live',
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
