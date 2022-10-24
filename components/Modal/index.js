// import Modal from "react-modal";

// Modal.setAppElement("#__next");

// export default function Teste () {

//     const [open, setIsOpen] = useState(false);
//     // const [itemSelecionado, setItemSelecionado] = useState(null);

//     const onItemClicked = (item) => {
//         setItemSelecionado(item);
//         setIsOpen(true);
//     }

//     return (
//         <Modal isOpen={open}
//             overlayClassName={styles.modalOverlay}
//             className={styles.modalContent}>
//                 <div className={styles.modalContent_div}>
//                     <div className={styles.container}>                        
//                         <div className={styles.modalImg_div}><img
//                             alt={itemSelecionado == null? 'vla' : itemSelecionado.name}
//                             src={itemSelecionado == null? 'vla' : itemSelecionado.image}
//                             width="270px"
//                             height="349px" 
//                             className={styles.imgGlobal}
//                             />
//                         </div>
//                         <div className={styles.modalTxt_div}>
//                             <ul className={styles.modalContent_ul}>
//                                 <li className={styles.modalContent_liP}>
//                                     <p className={styles.modalContent_p}>nome: <span className={styles.modalContent_p__span}>{itemSelecionado == null? 'vla' : itemSelecionado?.name}</span></p>
//                                 </li>
//                                 <li className={styles.modalContent_liP}>
//                                     <p className={styles.modalContent_p}>casa: <span className={styles.modalContent_p__span}>{itemSelecionado == null? 'vla' : itemSelecionado?.house}</span></p>
//                                 </li>
//                                 <li className={styles.modalContent_liP}>
//                                     <p className={styles.modalContent_p}>espécie: <span className={styles.modalContent_p__span}>{itemSelecionado == null? 'vla' : itemSelecionado?.species}</span></p>
//                                 </li>
//                                 <li className={styles.modalContent_liP}>
//                                     <p className={styles.modalContent_p}>data<span clasName={styles.modalContent_p__span_de}> de </span>nasc.: <span className={styles.modalContent_p__span}>{itemSelecionado == null? 'vla' : itemSelecionado?.dateOfBirth}</span></p>
//                                 </li>
//                                 <li className={styles.modalContent_liP}>
//                                     <p className={styles.modalContent_p}>gênero: <span className={styles.modalContent_p__span}>{itemSelecionado == null? 'vla' : itemSelecionado?.gender}</span></p>
//                                 </li>
//                                 <li className={styles.modalContent_liP}>
//                                     <p className={styles.modalContent_p}>patronus: <span className={styles.modalContent_p__span}>{itemSelecionado == null? 'vla' : itemSelecionado?.patronus}</span></p>
//                                 </li>
//                                 <li className={styles.modalContent_liP}>
//                                     <p className={styles.modalContent_p}>varinha: </p>
//                                     <ul className={styles.modalContent_wandUl}>
//                                         <li><p className={styles.modalContent_wandLi_p}>- madeira: <span className={styles.modalContent_wandLi_p_span}>{itemSelecionado == null? 'vla' : itemSelecionado?.wand?.wood}</span></p></li>
//                                         <li><p className={styles.modalContent_wandLi_p}>- núcleo: <span className={styles.modalContent_wandLi_p_span}>{itemSelecionado == null? 'vla' : itemSelecionado?.wand?.core}</span></p></li>
//                                         <li><p className={styles.modalContent_wandLi_p}>- tamanho: <span className={styles.modalContent_wandLi_p_span}>{itemSelecionado == null? 'vla' : itemSelecionado?.wand?.length}</span></p></li>
//                                     </ul>
//                                 </li>
//                                 <li className={styles.modalContent_liP}>
//                                     <p className={styles.modalContent_p}>ancestralidade: <span className={styles.modalContent_p__span}>{itemSelecionado == null? 'vla' : itemSelecionado?.ancestry}</span></p>
//                                 </li>
//                                 <li className={styles.modalContent_liP}>
//                                     <p className={styles.modalContent_p}>ator: <span className={styles.modalContent_p__span}>{itemSelecionado == null? 'vla' : itemSelecionado?.actor}</span></p>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className={styles.modalContent_divXClose}><p className={styles.modalContent_xClose} onClick={() => setIsOpen(false)}>X</p></div>
//                     </div>
//                 </div>
//             </Modal>
//     )
// }