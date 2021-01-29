import styleLayout from './style.module.css';

const Layout = ({ id, title, descr, urlBg, colorBg }) => {
  return (
    <section className={styleLayout.root} id={id} style ={ urlBg ? ({ backgroundImage: `url(${urlBg})` }) : ({ backgroundColor: `${colorBg}` })}>
    <div className={styleLayout.wrapper}>
        <article>
            <div className={styleLayout.title}>
                <h3>{title}</h3>
                <span className={styleLayout.separator}></span>
            </div>
            <div className={styleLayout.desc, styleLayout.full}>
                <p>{descr}</p>
            </div>
        </article>
    </div>
</section>
  )
}

export default Layout;