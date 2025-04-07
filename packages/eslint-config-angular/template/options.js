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
        'accept',
        'aria-describedby',
        'aria-labelledby',
        'aria-live',
        'rel',
        'sizes',
        // Not possible for Angular i18n to handle meta tags yet
        // https://github.com/angular/angular-cli/issues/8947
        'meta[content]'
    ],
    nimble: [
        // shared
        'appearance',
        'appearance-variant',
        'orientation',
        'severity',
        'slot',

        // combobox
        'autocomplete',

        // drawer
        'location',

        // rich text
        'nimble-mapping-user[display-name]',
        'pattern',

        // select
        'filter-mode',

        // table
        'action-menu-slot',
        'column-id',
        'field-name',
        'format',
        'href-field-name',
        'icon',
        'id-field-name',
        'key',
        'key-type',
        'label-field-name',
        'menu-slot',
        'parent-id-field-name',
        'selection-mode',
        'sort-direction',
        'width-mode',

        // tabs
        'activeid',

        // text area
        'resize',

        // theme provider
        'theme',

        // tooltips
        'anchor',

        // angular-specific
        'nimbleRouterLink',
        'queryParamsHandling'

    ],
    spright: [
        // chat
        'message-type'
    ],
    systemlink: [
        // sl-workspace-selector
        'action',

        // sl-table
        'columnId',
        'decimalDigits',
        'fieldName',
        'format',
        'groupableParentColumnId',
        'hrefFieldName',
        'idFieldName',
        'keyType',
        'labelFieldName',
        'parentIdFieldName',
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
    ],
    jqx: [
        // smart-table
        'sortMode',

        // smart-query-builder
        'applyMode',
        'fieldsMode'
    ],
    material: [
        'cdkDragBoundary',
        'cdkDragLockAxis',
        'cdkDragPreviewContainer',
        'cdkDragPreviewClass',
        'cdkDragRootElement',
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
