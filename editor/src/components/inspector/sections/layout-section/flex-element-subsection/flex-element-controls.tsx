import * as React from 'react'

import { SelectOption, SelectControl } from '../../../controls/select-control'
import { OptionChainOption, OptionChainControl } from '../../../controls/option-chain-control'
import { InspectorContextMenuWrapper } from '../../../../context-menu-wrapper'
import { addSetProperty, unsetPropertyMenuItem } from '../../../common/context-menu-items'
import { stylePropPathMappingFn, useInspectorLayoutInfo } from '../../../common/property-path-hooks'
import { useWrappedEmptyOrUnknownOnSubmitValue, ChainedNumberInput } from '../../../../../uuiui'
import { betterReactMemo } from '../../../../../uuiui-deps'
import { useInspectorInfoLonghandShorthand } from '../../../common/longhand-shorthand-hooks'

export const PositionControl = betterReactMemo('PositionControl', () => {
  const position = useInspectorLayoutInfo('position')

  return (
    <InspectorContextMenuWrapper
      id={`flex-element-position-context-menu`}
      items={[unsetPropertyMenuItem('Position', position.onUnsetValues)]}
      data={{}}
    >
      <OptionChainControl
        id='flex.element.position.position'
        key='flex.element.position.position'
        testId='flex.element.position.position'
        value={position.value}
        options={
          [
            {
              tooltip: 'Absolute',
              value: 'absolute',
              icon: {
                category: 'inspector-position',
                type: 'absolute',
                width: 16,
                height: 16,
                color: 'gray',
              },
            },
            {
              tooltip: 'Relative',
              value: 'relative',
              icon: {
                category: 'inspector-position',
                type: 'relative',
                width: 16,
                height: 16,
                color: 'gray',
              },
            },
          ] as Array<OptionChainOption<string | number>>
        }
        DEPRECATED_controlOptions={{
          labelBelow: 'Position',
        }}
        onSubmitValue={position.onSubmitValue}
        controlStatus={position.controlStatus}
        controlStyles={position.controlStyles}
      />
    </InspectorContextMenuWrapper>
  )
})

export const AlignSelfControl = betterReactMemo('AlignSelfControl', () => {
  const alignSelf = useInspectorLayoutInfo('alignSelf')

  return (
    <InspectorContextMenuWrapper
      id={`align-self-context-menu`}
      items={[unsetPropertyMenuItem('Align Self', alignSelf.onUnsetValues)]}
      data={{}}
    >
      <SelectControl
        id='flex.element.alignSelf'
        key='flex.element.alignSelf'
        testId='flex.element.alignSelf'
        options={
          [
            {
              value: 'auto',
              label: 'Auto',
            },
            {
              value: 'flex-start',
              label: 'Flex Start',
            },
            {
              value: 'center',
              label: 'Center',
            },
            {
              value: 'flex-end',
              label: 'Flex End',
            },
            {
              value: 'stretch',
              label: 'Stretch',
            },
          ] as Array<SelectOption>
        }
        value={alignSelf.value}
        onSubmitValue={alignSelf.onSubmitValue}
        controlStatus={alignSelf.controlStatus}
        controlStyles={alignSelf.controlStyles}
      />
    </InspectorContextMenuWrapper>
  )
})

export const MarginControl = betterReactMemo('MarginControl', () => {
  const marginTop = useInspectorInfoLonghandShorthand('marginTop', 'margin', stylePropPathMappingFn)
  const marginRight = useInspectorInfoLonghandShorthand(
    'marginRight',
    'margin',
    stylePropPathMappingFn,
  )
  const marginBottom = useInspectorInfoLonghandShorthand(
    'marginBottom',
    'margin',
    stylePropPathMappingFn,
  )
  const marginLeft = useInspectorInfoLonghandShorthand(
    'marginLeft',
    'margin',
    stylePropPathMappingFn,
  )

  const wrappedMarginTopOnSubmitValue = useWrappedEmptyOrUnknownOnSubmitValue(
    marginTop.onSubmitValue,
    marginTop.onUnsetValues,
  )
  const wrappedMarginTopOnTransientSubmitValue = useWrappedEmptyOrUnknownOnSubmitValue(
    marginTop.onSubmitValue,
    marginTop.onUnsetValues,
  )
  const wrappedMarginRightOnSubmitValue = useWrappedEmptyOrUnknownOnSubmitValue(
    marginRight.onSubmitValue,
    marginRight.onUnsetValues,
  )
  const wrappedMarginRightOnTransientSubmitValue = useWrappedEmptyOrUnknownOnSubmitValue(
    marginRight.onSubmitValue,
    marginRight.onUnsetValues,
  )
  const wrappedMarginBottomOnSubmitValue = useWrappedEmptyOrUnknownOnSubmitValue(
    marginBottom.onSubmitValue,
    marginBottom.onUnsetValues,
  )
  const wrappedMarginBottomOnTransientSubmitValue = useWrappedEmptyOrUnknownOnSubmitValue(
    marginBottom.onSubmitValue,
    marginBottom.onUnsetValues,
  )
  const wrappedMarginLeftOnSubmitValue = useWrappedEmptyOrUnknownOnSubmitValue(
    marginLeft.onSubmitValue,
    marginLeft.onUnsetValues,
  )
  const wrappedMarginLeftOnTransientSubmitValue = useWrappedEmptyOrUnknownOnSubmitValue(
    marginLeft.onSubmitValue,
    marginLeft.onUnsetValues,
  )

  return (
    <ChainedNumberInput
      idPrefix={'margin'}
      propsArray={[
        {
          value: marginTop.value,
          DEPRECATED_labelBelow: 'T',
          controlStatus: marginTop.controlStatus,
          onSubmitValue: wrappedMarginTopOnSubmitValue,
          onTransientSubmitValue: wrappedMarginTopOnTransientSubmitValue,
          numberType: 'UnitlessPercent',
          testId: 'margin-T',
          defaultUnitToHide: 'px',
        },
        {
          value: marginRight.value,
          DEPRECATED_labelBelow: 'R',
          controlStatus: marginRight.controlStatus,
          onSubmitValue: wrappedMarginRightOnSubmitValue,
          onTransientSubmitValue: wrappedMarginRightOnTransientSubmitValue,
          numberType: 'UnitlessPercent',
          testId: 'margin-R',
          defaultUnitToHide: 'px',
        },
        {
          value: marginBottom.value,
          DEPRECATED_labelBelow: 'B',
          controlStatus: marginBottom.controlStatus,
          onSubmitValue: wrappedMarginBottomOnSubmitValue,
          onTransientSubmitValue: wrappedMarginBottomOnTransientSubmitValue,
          numberType: 'UnitlessPercent',
          testId: 'margin-B',
          defaultUnitToHide: 'px',
        },
        {
          value: marginLeft.value,
          DEPRECATED_labelBelow: 'L',
          controlStatus: marginLeft.controlStatus,
          onSubmitValue: wrappedMarginLeftOnSubmitValue,
          onTransientSubmitValue: wrappedMarginLeftOnTransientSubmitValue,
          numberType: 'UnitlessPercent',
          testId: 'margin-L',
          defaultUnitToHide: 'px',
        },
      ]}
    />
  )
})
