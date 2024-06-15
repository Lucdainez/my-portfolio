import { useState } from 'react';
import { projects, Iproject } from '../../../data/ListProjects';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure
} from '@nextui-org/react';
import { AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

export default function Projects() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [dataProject, setDataProject] = useState<Iproject>({
    id: 0,
    description: '',
    linkGitHub: '',
    linkDeploy: '',
    projectName: ''
  });

  return (
    <motion.section
      className="flex flex-col sm:flex-row"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex justify-between my-5 mx-auto m-5 w-full sm:w-32 h-32 rounded-lg bg-sky-400/25 shadow"
        >
          <Button
            className="m-auto w-full sm:w-32 h-32"
            onPress={onOpen}
            onClick={() => setDataProject(project)}
          >
            <motion.h2
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="m-auto"
            >
              <strong>{project.projectName}</strong>
            </motion.h2>
          </Button>
        </motion.div>
      ))}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full pt-12"
      >
        <ModalContent>
          {() => (
            <aside className="bg-white bg-opacity-25 m-5 rounded-md p-3 md:w-3/5 xl:w-2/6">
              <ModalHeader className="flex text-left text-xl mb-3 mx-4">
                <h1 className="mr-5">
                  <strong>{dataProject.projectName}</strong>
                </h1>
                <a href={dataProject.linkGitHub} target="_blank">
                  <AiFillGithub className="w-8 h-8 pr-1 m-auto" />
                </a>
              </ModalHeader>
              <ModalBody className="bg-black bg-opacity-5 backdrop-blur-md rounded-lg p-5 font-sans">
                {dataProject.description}
              </ModalBody>
            </aside>
          )}
        </ModalContent>
      </Modal>
    </motion.section>
  );
}
