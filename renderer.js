// ipc = inter-process communication 进程间通信

const func = async () => {
    const response = await window.comm.ping();
    console.log(response)
}

func();
