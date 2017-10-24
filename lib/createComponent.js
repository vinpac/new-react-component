import path from 'path'
import fs from 'fs-extra'

function parseComponentPath(componentPath) {
  const lastSlashIndex = componentPath.lastIndexOf('/') + 1
  const componentName = componentPath
    .substr(lastSlashIndex)
    .replace(/(?:(^\w)|-+(\w))/g, (match, l, l2) => (l || l2).toUpperCase())

  return {
    dirpath: componentPath,
    name: componentName,
  }
}

function createStyleFile(component, { fileExtension, useModules }) {
  const filename = `${component.name}${fileExtension}`
  const selector = useModules
    ? '.component'
    : `.${component.name.charAt(0).toLowerCase()}${component.name.substr(1)}`
  let body

  switch (fileExtension) {
    case '.styl':
      body = `${selector}\n`
      break
    default:
      body = `${selector} {}\n`
  }

  fs.writeFileSync(path.join(component.dirpath, filename), body)

  return {
    selector,
  }
}

function createIndexFile(component) {
  fs.writeFileSync(
    path.join(component.dirpath, 'index.js'),
    [
      `import ${component.name} from './${component.name}'`,
      '',
      `export default ${component.name}`,
    ].join('\n'),
  )
}

function createPackageFile(component) {
  fs.writeFileSync(
    path.join(component.dirpath, 'package.json'),
    JSON.stringify(
      {
        name: component.name,
        version: '0.0.0',
        private: true,
        main: `./${component.name}`,
      },
      null,
      2,
    ),
  )
}

function createComponentFile(
  component,
  selector,
  { isFunctional, useStyleModules, styleExtension },
) {
  const className = useStyleModules ? `s${selector}` : `'${selector.substr(1)}'`

  fs.writeFileSync(
    path.join(component.dirpath, `${component.name}.js`),
    [
      'import React from \'react\'',
      'import PropTypes from \'prop-types\'',
      `import ${useStyleModules ? 's from ' : ''}'./${component.name}${styleExtension}'`,
      '',
      ...(isFunctional ? [
        `const ${component.name} = ({ className }) => (`,
        `  <div className={[${className}, className].join(' ')}></div>`,
        ')',
        '',
        `${component.name}.displayName = '${component.name}'`,
        '',
        `${component.name}.propTypes = {`,
        '  className: PropTypes.string,',
        '}',
        '',
        `${component.name}.defaultProps = {`,
        '  className: \'\',',
        '}',
      ] : [
        `class ${component.name} extends React.Component {`,
        '  static propTypes = {',
        '    className: PropTypes.string,',
        '  }',
        '',
        '  static defaultProps = {',
        '    className: \'\',',
        '  }',
        '',
        '  render() {',
        '    const { className } = this.props',
        '',
        '    return (',
        `      <div className={[${className}, className].join(' ')}></div>`,
        '    )',
        '  }',
        '}',
      ]),
      '',
      `export default ${component.name}`,
      '',
    ].join('\n'),
  )
}

export default function createComponent(componentName, opts) {
  const component = parseComponentPath(componentName)
  fs.ensureDirSync(component.dirpath)
  let className

  if (!opts.noStyle) {
    className = createStyleFile(component, {
      fileExtension: opts.style,
      useModules: opts.styleModules,
    }).selector
  }

  if (opts.useIndex) {
    createIndexFile(component)
  } else {
    createPackageFile(component)
  }

  createComponentFile(component, className, {
    styleExtension: opts.style,
    useStyleModules: opts.styleModules,
    isFunctional: opts.functional,
  })
}
