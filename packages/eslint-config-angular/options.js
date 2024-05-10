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
const ignoreAttributes = {
    nimble: [
        'action-menu-slot',
        'appearance',
        'appearance-variant',
        'column-id',
        'field-name',
        'format',
        'icon',
        'id-field-name',
        'key',
        'key-type',
        'orientation',
        'severity',
        'slot',
        'theme'
    ],
    systemlink: [
        // sl-workspace-selector
        'action',

        // sl-table
        'columnId',
        'fieldName',
        'idFieldName',
        'selectionMode',
        'slTableColumnId',

        // sl-grid
        'dataRowId',
        'loadColumnStateBehavior',
        'parentDataField'
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
ignoreAttributes.all = Object.values(ignoreAttributes).flat();

module.exports = {
    ignoreAttributes
};
