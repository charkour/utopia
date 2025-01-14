import { importAlias, importDetails } from '../../shared/project-file-types'
import { mergeImports } from './project-file-utils'

describe('mergeImports', () => {
  it('can merge an empty imports', () => {
    const result = mergeImports(
      '/src/code.js',
      { '/src/fileA.js': importDetails(null, [importAlias('Card')], null) },
      {},
    )

    expect(result).toEqual({
      '/src/fileA.js': importDetails(null, [importAlias('Card')], null),
    })
  })

  it('combines two separate imports', () => {
    const result = mergeImports(
      '/src/code.js',
      { '/src/fileA.js': importDetails(null, [importAlias('Card')], null) },
      { '/src/fileB.js': importDetails(null, [importAlias('FlexRow')], null) },
    )

    expect(result).toEqual({
      '/src/fileA.js': importDetails(null, [importAlias('Card')], null),
      '/src/fileB.js': importDetails(null, [importAlias('FlexRow')], null),
    })
  })

  it('combines two imports pointing to the same file', () => {
    const result = mergeImports(
      '/src/code.js',
      { '/src/fileA.js': importDetails(null, [importAlias('Card')], null) },
      { '/src/fileA.js': importDetails(null, [importAlias('FlexRow')], null) },
    )

    expect(result).toEqual({
      '/src/fileA.js': importDetails(null, [importAlias('Card'), importAlias('FlexRow')], null),
    })
  })

  it('combines two imports pointing to the same file, even if the relative path are written differently', () => {
    const result = mergeImports(
      '/src/code.js',
      { '/src/fileA.js': importDetails(null, [importAlias('Card')], null) },
      { './fileA': importDetails(null, [importAlias('FlexRow')], null) },
    )

    expect(result).toEqual({
      '/src/fileA.js': importDetails(null, [importAlias('Card'), importAlias('FlexRow')], null),
    })
  })

  it('combines the same thing imported smartly', () => {
    const result = mergeImports(
      '/src/code.js',
      { '/src/fileA.js': importDetails(null, [importAlias('Card')], null) },
      { '/src/fileA.js': importDetails(null, [importAlias('Card')], null) },
    )

    expect(result).toEqual({
      '/src/fileA.js': importDetails(null, [importAlias('Card')], null),
    })
  })

  it('combines the same thing imported smartly, even if the relative path are written differently', () => {
    const result = mergeImports(
      '/src/code.js',
      { '/src/fileA.js': importDetails(null, [importAlias('Card')], null) },
      {
        './fileA.js': importDetails(null, [importAlias('Card')], null),
        '../src/fileA.js': importDetails(null, [importAlias('FlexRow')], null),
      },
    )

    expect(result).toEqual({
      '/src/fileA.js': importDetails(null, [importAlias('Card'), importAlias('FlexRow')], null),
    })
  })

  it('combines the same thing imported smartly, even if the relative path are written differently, with omitted file extension', () => {
    const result = mergeImports(
      '/src/code.js',
      { '/src/fileA.js': importDetails(null, [importAlias('Card')], null) },
      {
        '../src/fileA': importDetails(null, [importAlias('FlexRow')], null),
      },
    )

    expect(result).toEqual({
      '/src/fileA.js': importDetails(null, [importAlias('Card'), importAlias('FlexRow')], null),
    })
  })

  it('default import doesnt override existing default import', () => {
    const result = mergeImports(
      '/src/code.js',
      { '/src/fileA.js': importDetails('Card', [], null) },
      { '/src/fileA.js': importDetails('Flexrow', [], null) },
    )

    expect(result).toEqual({
      '/src/fileA.js': importDetails('Card', [], null),
    })
  })

  it('adds non-relative import with ease', () => {
    const result = mergeImports(
      '/src/code.js',
      { '/src/fileA.js': importDetails('Card', [], null) },
      { 'component-library': importDetails('Flexrow', [], null) },
    )

    expect(result).toEqual({
      '/src/fileA.js': importDetails('Card', [], null),
      'component-library': importDetails('Flexrow', [], null),
    })
  })

  it('combines non-relative import with ease', () => {
    const result = mergeImports(
      '/src/code.js',
      { 'component-library': importDetails(null, [importAlias('Card')], null) },
      { 'component-library': importDetails(null, [importAlias('FlexRow')], null) },
    )

    expect(result).toEqual({
      'component-library': importDetails(null, [importAlias('Card'), importAlias('FlexRow')], null),
    })
  })
})
