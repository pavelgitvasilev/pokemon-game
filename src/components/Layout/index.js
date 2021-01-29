import styleLayout from './style.module.css';

const Layout = ({ iden, title, urlBg, colorBg, children }) => {
  return (
    <section className={styleLayout.root} id={iden} style ={ urlBg ? ({ backgroundImage: `url(${urlBg})` }) : ({ backgroundColor: `${colorBg}` })}>
    <div className={styleLayout.wrapper}>
        <article>
            <div className={styleLayout.title}>
                <h3>{title}</h3>
                <span className={styleLayout.separator}></span>
            </div>
            <div className={ styleLayout.full}>
                {children}
            </div>
        </article>
    </div>
</section>
  )
}

export default Layout;