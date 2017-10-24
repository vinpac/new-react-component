import commander from 'commander'
import chalk from 'chalk'
import pkg from '../package.json'
import createComponent from './createComponent'

let componentName
const program = new commander.Command(pkg.name)
  .version(pkg.version)
  .arguments('<component-directory>')
  .action((name) => {
    componentName = name
  })
  .option('--no-style', 'creates no style file', false)
  .option('--style <style-extension>', 'the style file extesion [.css]', '.css')
  .option('--use-index', 'use index.js instead of package.json', false)
  .option('--functional', 'writes a functional component', false)
  .option('--style-modules <bool>', 'treat style as modular [true]', true)
  .on('--help', () => {
    console.log(`    Only ${chalk.green('<component-directory>')} is required.`)
    console.log()
    console.log('    If you have any problems, do not hesitate to file an issue:')
    console.log(
      `      ${chalk.cyan('https://github.com/vinpac/generate-react-component/issues/new')}`,
    )
    console.log()
  })
  .usage(`${chalk.green('<component-directory>')} [options]`)
  .parse(process.argv)

if (typeof componentName === 'undefined') {
  console.error('Please specify the component directory:')
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('<component-directory>')}`)
  console.log()
  console.log('For example:')
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('my-component')}`)
  console.log()
  console.log(`Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`)
  process.exit(1)
}

createComponent(
  componentName,
  {
    functional: !!program.functional && program.functional !== 'false',
    useIndex: !!program.useIndex,
    noStyle: !!program.noStyle,
    style: program.style,
    styleModules: program.styleModules !== 'false',
  },
)
