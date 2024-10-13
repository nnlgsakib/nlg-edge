package ibft

import (
	"github.com/nnlgsakib/neth/command/NLG-ibft/candidates"
	"github.com/nnlgsakib/neth/command/NLG-ibft/propose"
	"github.com/nnlgsakib/neth/command/NLG-ibft/quorum"
	"github.com/nnlgsakib/neth/command/NLG-ibft/snapshot"
	"github.com/nnlgsakib/neth/command/NLG-ibft/status"
	_switch "github.com/nnlgsakib/neth/command/NLG-ibft/switch"
	"github.com/nnlgsakib/neth/command/helper"
	"github.com/spf13/cobra"
)

func GetCommand() *cobra.Command {
	ibftCmd := &cobra.Command{
		Use:   "nlgbft",
		Short: "Top level NLG-IBFT command for interacting with the NLG-IBFT consensus. Only accepts subcommands.",
	}

	helper.RegisterGRPCAddressFlag(ibftCmd)

	registerSubcommands(ibftCmd)

	return ibftCmd
}

func registerSubcommands(baseCmd *cobra.Command) {
	baseCmd.AddCommand(
		// ibft status
		status.GetCommand(),
		// ibft snapshot
		snapshot.GetCommand(),
		// ibft propose
		propose.GetCommand(),
		// ibft candidates
		candidates.GetCommand(),
		// ibft switch
		_switch.GetCommand(),
		// ibft quorum
		quorum.GetCommand(),
	)
}
